import * as React from "react";
import { FunctionField, FieldProps } from "react-admin";
import { Order } from "../../types";

const render = (record?: Order): number | null | undefined =>
  record && record.basket.length;

const NbItemsField = ({ record }: FieldProps<Order>): React.ReactElement => (
  <FunctionField<Order> record={record} render={render} />
);

NbItemsField.defaultProps = {
  label: "resources.commands.fields.nb_items",
  textAlign: "right",
};

export default NbItemsField;
