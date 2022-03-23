import { Fragment } from "react";
import {
  BulkDeleteButton,
  Datagrid,
  List,
  ListProps,
  ReferenceField,
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

export const StorageDirList = (props: ListProps): JSX.Element => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField source="superiorId" reference="storageDirs">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
