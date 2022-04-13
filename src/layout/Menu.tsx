import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import LabelIcon from "@material-ui/icons/Label";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  ReduxState,
} from "react-admin";

import visitors from "../resources/visitors";
import orders from "../resources/orders";
import invoices from "../resources/invoices";
import products from "../resources/products";
import categories from "../resources/categories";
import reviews from "../resources/reviews";
import SubMenu from "./SubMenu";
import { AppState } from "../types";

type MenuName =
  | "menuCatalog"
  | "menuSales"
  | "menuCustomers"
  | "menuFiles"
  | "menuCollectors"
  | "menuVodResources";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuItemLinkAsAny: any = MenuItemLink;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  open: {
    width: 200,
  },
  closed: {
    width: 55,
  },
}));

const Menu = ({ dense = false }: MenuProps): ReactElement => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
    menuFiles: false,
    menuCollectors: false,
    menuVodResources: true,
  });
  const translate = useTranslate();
  const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen);
  useSelector((state: AppState) => state.theme); // force rerender on theme change
  const classes = useStyles();

  const handleToggle = (menu: MenuName): void => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div
      className={classnames(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
    >
      {" "}
      <DashboardMenuItem />
      <SubMenu
        handleToggle={(): void => handleToggle("menuSales")}
        isOpen={state.menuSales}
        name="pos.menu.sales"
        icon={<orders.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/commands",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.commands.name`, {
            smart_count: 2,
          })}
          leftIcon={<orders.icon />}
          dense={dense}
        />
        <MenuItemLinkAsAny
          to={{
            pathname: "/invoices",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.invoices.name`, {
            smart_count: 2,
          })}
          leftIcon={<invoices.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={(): void => handleToggle("menuCatalog")}
        isOpen={state.menuCatalog}
        name="pos.menu.catalog"
        icon={<products.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/products",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.products.name`, {
            smart_count: 2,
          })}
          leftIcon={<products.icon />}
          dense={dense}
        />
        <MenuItemLinkAsAny
          to={{
            pathname: "/categories",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.categories.name`, {
            smart_count: 2,
          })}
          leftIcon={<categories.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={(): void => handleToggle("menuCustomers")}
        isOpen={state.menuCustomers}
        name="pos.menu.customers"
        icon={<visitors.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/customers",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.customers.name`, {
            smart_count: 2,
          })}
          leftIcon={<visitors.icon />}
          dense={dense}
        />
        <MenuItemLinkAsAny
          to={{
            pathname: "/segments",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.segments.name`, {
            smart_count: 2,
          })}
          leftIcon={<LabelIcon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={(): void => handleToggle("menuFiles")}
        isOpen={state.menuFiles}
        name="pos.menu.files"
        icon={<orders.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/storageDirs",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.storageDirs.name`, {
            smart_count: 2,
          })}
          leftIcon={<orders.icon />}
          dense={dense}
        />
        <MenuItemLinkAsAny
          to={{
            pathname: "/storageFiles",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.storageFiles.name`, {
            smart_count: 2,
          })}
          leftIcon={<invoices.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={(): void => handleToggle("menuCollectors")}
        isOpen={state.menuCollectors}
        name="pos.menu.menuCollectors"
        icon={<orders.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/videoCollectors",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.videoCollectors.name`, {
            smart_count: 2,
          })}
          leftIcon={<orders.icon />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={(): void => handleToggle("menuVodResources")}
        isOpen={state.menuVodResources}
        name="pos.menu.menuVodResources"
        icon={<orders.icon />}
        dense={dense}
      >
        <MenuItemLinkAsAny
          to={{
            pathname: "/VodResources",
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`resources.VodResources.name`, {
            smart_count: 2,
          })}
          leftIcon={<orders.icon />}
          dense={dense}
        />
      </SubMenu>
      <MenuItemLinkAsAny
        to={{
          pathname: "/reviews",
          state: { _scrollToTop: true },
        }}
        primaryText={translate(`resources.reviews.name`, {
          smart_count: 2,
        })}
        leftIcon={<reviews.icon />}
        dense={dense}
      />
    </div>
  );
};

export default Menu;
