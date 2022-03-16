import { Create, SimpleForm, TextInput, CreateProps } from "react-admin";
import RichEditor from "../../inputs/RichEditor";

export const ArticleCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="cover" />
      <RichEditor source="body" />
    </SimpleForm>
  </Create>
);
