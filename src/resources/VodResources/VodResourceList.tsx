import {
  Datagrid,
  DateField,
  ImageField,
  List,
  ListProps,
  TextField,
  TextInput,
} from "react-admin";

const VodResourceFilters = [<TextInput label="Search" source="q" alwaysOn />];

export const VodResourceList = (props: ListProps): JSX.Element => (
  <List {...props} filters={VodResourceFilters}>
    <Datagrid rowClick="show">
      <ImageField source="vod_pic" />
      <TextField source="vod_name" />
      <TextField source="type_name" />
      <TextField source="vod_remarks" />
      <DateField source="createdAt" showTime />
    </Datagrid>
  </List>
);
