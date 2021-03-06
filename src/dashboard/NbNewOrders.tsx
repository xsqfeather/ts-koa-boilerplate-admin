import * as React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useTranslate } from "react-admin";

import CardWithIcon from "./CardWithIcon";

interface Props {
  value?: number;
}

const NbNewOrders = (props: Props): React.ReactElement => {
  const { value } = props;
  const translate = useTranslate();
  return (
    <CardWithIcon
      to="/commands"
      icon={ShoppingCartIcon}
      title={translate("pos.dashboard.new_orders")}
      subtitle={value}
    />
  );
};

export default NbNewOrders;
