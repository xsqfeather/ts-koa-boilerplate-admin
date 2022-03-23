import {
  Create,
  SimpleForm,
  TextInput,
  CreateProps,
  SelectInput,
} from "react-admin";

export const videoCollectorCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="url" />
      <SelectInput
        source="type"
        choices={[
          { id: "json", name: "JSON" },
          { id: "xml", name: "XML" },
        ]}
      />
    </SimpleForm>
  </Create>
);
