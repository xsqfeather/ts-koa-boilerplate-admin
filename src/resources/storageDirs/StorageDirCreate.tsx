import { Create, SimpleForm, TextInput, CreateProps } from "react-admin";

export const StorageDirCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="ipfsCid" />
    </SimpleForm>
  </Create>
);
