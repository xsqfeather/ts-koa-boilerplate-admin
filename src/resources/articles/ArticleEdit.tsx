import { SimpleForm, TextInput, Edit, EditProps } from "react-admin";

export const ArticleEdit = (props: EditProps): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="cover" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);
