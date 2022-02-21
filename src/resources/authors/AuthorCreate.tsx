import { Create, SimpleForm, TextInput, CreateProps } from "react-admin";

export const AuthorCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);
