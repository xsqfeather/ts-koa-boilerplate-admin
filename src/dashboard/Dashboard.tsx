import React, {
  useState,
  useEffect,
  useCallback,
  CSSProperties,
  ReactElement,
} from "react";
import { useVersion, useDataProvider } from "react-admin";
import { useMediaQuery, Theme } from "@material-ui/core";
import { subDays } from "date-fns";

import Welcome from "./Welcome";
import MonthlyRevenue from "./MonthlyRevenue";
import NbNewOrders from "./NbNewOrders";
import PendingOrders from "./PendingOrders";
import PendingReviews from "./PendingReviews";
import NewCustomers from "./NewCustomers";
import OrderChart from "./OrderChart";

import { Customer, Order, Review } from "../types";

interface OrderStats {
  revenue: number;
  nbNewOrders: number;
  pendingOrders: Order[];
}

interface CustomerData {
  [key: string]: Customer;
}

interface State {
  nbNewOrders?: number;
  nbPendingReviews?: number;
  pendingOrders?: Order[];
  pendingOrdersCustomers?: CustomerData;
  pendingReviews?: Review[];
  pendingReviewsCustomers?: CustomerData;
  recentOrders?: Order[];
  revenue?: string;
}

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

const Spacer = (): ReactElement => <span style={{ width: "1em" }} />;
const VerticalSpacer = (): ReactElement => <span style={{ height: "1em" }} />;

const Dashboard = (): ReactElement => {
  const [state, setState] = useState<State>({});
  const version = useVersion();
  const dataProvider = useDataProvider();
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const fetchOrders = useCallback(async () => {
    const aMonthAgo = subDays(new Date(), 30);
    const { data: recentOrders } = await dataProvider.getList<Order>(
      "commands",
      {
        filter: { date_gte: aMonthAgo.toISOString() },
        sort: { field: "date", order: "DESC" },
        pagination: { page: 1, perPage: 50 },
      }
    );
    const aggregations = recentOrders
      .filter((order) => order.status !== "cancelled")
      .reduce(
        (stats: OrderStats, order) => {
          if (order.status !== "cancelled") {
            stats.revenue += order.total;
            stats.nbNewOrders++;
          }
          if (order.status === "ordered") {
            stats.pendingOrders.push(order);
          }
          return stats;
        },
        {
          revenue: 0,
          nbNewOrders: 0,
          pendingOrders: [],
        }
      );
    setState((state) => ({
      ...state,
      recentOrders,
      revenue: aggregations.revenue.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      nbNewOrders: aggregations.nbNewOrders,
      pendingOrders: aggregations.pendingOrders,
    }));
    const { data: customers } = await dataProvider.getMany<Customer>(
      "customers",
      {
        ids: aggregations.pendingOrders.map(
          (order: Order) => order.customer_id
        ),
      }
    );
    setState((state) => ({
      ...state,
      pendingOrdersCustomers: customers.reduce(
        (prev: CustomerData, customer) => {
          prev[customer.id] = customer; // eslint-disable-line no-param-reassign
          return prev;
        },
        {}
      ),
    }));
  }, [dataProvider]);

  const fetchReviews = useCallback(async () => {
    const { data: reviews } = await dataProvider.getList<Review>("reviews", {
      filter: { status: "pending" },
      sort: { field: "date", order: "DESC" },
      pagination: { page: 1, perPage: 100 },
    });
    const nbPendingReviews = reviews.reduce((nb: number) => ++nb, 0);
    const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
    setState((state) => ({ ...state, pendingReviews, nbPendingReviews }));
    const { data: customers } = await dataProvider.getMany<Customer>(
      "customers",
      {
        ids: pendingReviews.map((review) => review.customer_id),
      }
    );
    setState((state) => ({
      ...state,
      pendingReviewsCustomers: customers.reduce(
        (prev: CustomerData, customer) => {
          prev[customer.id] = customer; // eslint-disable-line no-param-reassign
          return prev;
        },
        {}
      ),
    }));
  }, [dataProvider]);

  useEffect(() => {
    fetchOrders();
    fetchReviews();
  }, [version]);

  const {
    nbNewOrders,
    nbPendingReviews,
    pendingOrders,
    pendingOrdersCustomers,
    pendingReviews,
    pendingReviewsCustomers,
    revenue,
    recentOrders,
  } = state;
  return isXSmall ? (
    <div>
      <div style={styles.flexColumn as CSSProperties}>
        <Welcome />
        <MonthlyRevenue value={revenue} />
        <VerticalSpacer />
        <NbNewOrders value={nbNewOrders} />
        <VerticalSpacer />
        <PendingOrders
          orders={pendingOrders}
          customers={pendingOrdersCustomers}
        />
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn as CSSProperties}>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
      <div style={styles.flex}>
        <MonthlyRevenue value={revenue} />
        <Spacer />
        <NbNewOrders value={nbNewOrders} />
      </div>
      <div style={styles.singleCol}>
        <OrderChart orders={recentOrders} />
      </div>
      <div style={styles.singleCol}>
        <PendingOrders
          orders={pendingOrders}
          customers={pendingOrdersCustomers}
        />
      </div>
    </div>
  ) : (
    <>
      <Welcome />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <MonthlyRevenue value={revenue} />
            <Spacer />
            <NbNewOrders value={nbNewOrders} />
          </div>
          <div style={styles.singleCol}>
            <OrderChart orders={recentOrders} />
          </div>
          <div style={styles.singleCol}>
            <PendingOrders
              orders={pendingOrders}
              customers={pendingOrdersCustomers}
            />
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            <PendingReviews
              nb={nbPendingReviews}
              reviews={pendingReviews}
              customers={pendingReviewsCustomers}
            />
            <Spacer />
            <NewCustomers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;