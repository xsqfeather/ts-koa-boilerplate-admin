import { Create, SimpleForm, TextInput, CreateProps } from "react-admin";

export const BlockRuleCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="fact" />
      <TextInput source="operator" />
      <TextInput source="value" />
    </SimpleForm>
  </Create>
);
