import { Fragment } from "react";
import {
  BooleanField,
  BulkDeleteButton,
  Datagrid,
  List,
  ListProps,
  TextField,
} from "react-admin";
import { PublishManyButton } from "../../buttons/PublishButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostBulkActionButtons = (props: any): JSX.Element => (
  <Fragment>
    <PublishManyButton {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton />
  </Fragment>
);

export const AccessRuleList = (props: ListProps): JSX.Element => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="fact" />
      <TextField source="ruleNumber" />
      <TextField source="operator" />
      <TextField source="value" />
      <BooleanField source="allowed" />
    </Datagrid>
  </List>
);
