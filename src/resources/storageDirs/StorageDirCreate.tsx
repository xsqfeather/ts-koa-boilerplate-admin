import {
  Create,
  SimpleForm,
  TextInput,
  CreateProps,
  ReferenceArrayInput,
  SelectInput,
} from "react-admin";

export const StorageDirCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceArrayInput source="superiorId" reference="storageDirs">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
