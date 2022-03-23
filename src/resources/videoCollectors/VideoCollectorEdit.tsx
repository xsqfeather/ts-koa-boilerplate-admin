import {
  SimpleForm,
  TextInput,
  Edit,
  EditProps,
  SelectInput,
} from "react-admin";

export const VideoCollectorEdit = (props: EditProps): JSX.Element => (
  <Edit {...props}>
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
  </Edit>
);
