import { ReactElement } from "react";
import { ReferenceField, ReferenceFieldProps } from "react-admin";

import FullNameField from "./FullNameField";

const CustomerReferenceField = (
  props: Omit<ReferenceFieldProps, "reference" | "children" | "source"> & {
    source?: string;
  }
): ReactElement => (
  <ReferenceField source="customer_id" reference="customers" {...props}>
    <FullNameField />
  </ReferenceField>
);

CustomerReferenceField.defaultProps = {
  source: "customer_id",
  addLabel: true,
};

export default CustomerReferenceField;
