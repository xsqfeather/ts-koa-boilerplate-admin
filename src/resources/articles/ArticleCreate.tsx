import { Create, SimpleForm, TextInput, CreateProps } from "react-admin";

export const ArticleCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="cover" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);
