import {
  SimpleForm,
  TextInput,
  Edit,
  EditProps,
  SelectInput,
} from "react-admin";
import RichEditor from "../../inputs/RichEditor";
import UploadButton from "../../inputs/UploadButton";

export const ArticleEdit = (props: EditProps): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <UploadButton source="cover" label="cover" />
      <SelectInput
        source="postType"
        choices={[
          { id: "programming", name: "Programming" },
          { id: "lifestyle", name: "Lifestyle" },
          { id: "photography", name: "Photography" },
        ]}
      />

      <RichEditor source="body" />
    </SimpleForm>
  </Edit>
);
