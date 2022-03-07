import * as React from "react";
import {
  Identifier,
  Datagrid,
  DateField,
  TextField,
  DatagridProps,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import ProductReferenceField from "../products/ProductReferenceField";
import CustomerReferenceField from "../visitors/CustomerReferenceField";
import StarRatingField from "./StarRatingField";
import rowStyle from "./rowStyle";

const useListStyles = makeStyles({
  headerRow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 5,
    borderLeftStyle: "solid",
  },
  headerCell: {
    padding: "6px 8px 6px 8px",
  },
  rowCell: {
    padding: "6px 8px 6px 8px",
  },
  comment: {
    maxWidth: "18em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export interface ReviewListDesktopProps extends DatagridProps {
  selectedRow?: Identifier;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatagridAsAny: any = Datagrid;

const ReviewListDesktop = ({
  selectedRow,
  ...props
}: ReviewListDesktopProps): React.ReactElement => {
  const classes = useListStyles();
  return (
    <DatagridAsAny
      rowClick="edit"
      rowStyle={rowStyle(selectedRow)}
      classes={{
        headerRow: classes.headerRow,
        headerCell: classes.headerCell,
        rowCell: classes.rowCell,
      }}
      optimized
      {...props}
    >
      <DateField source="date" />
      <CustomerReferenceField link={false} />
      <ProductReferenceField link={false} />
      <StarRatingField size="small" />
      <TextField source="comment" cellClassName={classes.comment} />
      <TextField source="status" />
    </DatagridAsAny>
  );
};

export default ReviewListDesktop;
