import {
  Create,
  SimpleForm,
  TextInput,
  CreateProps,
  BooleanInput,
} from "react-admin";

export const AccessRuleCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="fact" />
      <TextInput source="operator" />
      <TextInput source="value" />
      <BooleanInput source="allowed" />
    </SimpleForm>
  </Create>
);
