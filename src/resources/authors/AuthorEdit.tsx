import { SimpleForm, TextInput, Edit, EditProps } from "react-admin";

export const AuthorEdit = (props: EditProps): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);
