import {
  Datagrid,
  DateField,
  ImageField,
  List,
  ListProps,
  TextField,
} from "react-admin";

export const VodResourceList = (props: ListProps): JSX.Element => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="vod_pic" />
      <TextField source="vod_name" />
      <TextField source="type_name" />
      <TextField source="vod_remarks" />
      <DateField source="createdAt" showTime />
    </Datagrid>
  </List>
);
