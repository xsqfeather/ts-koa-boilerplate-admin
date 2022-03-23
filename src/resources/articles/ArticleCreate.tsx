import {
  Create,
  SimpleForm,
  TextInput,
  CreateProps,
  SelectInput,
  FormDataConsumer,
} from "react-admin";
import RichEditor from "../../inputs/RichEditor";
import UploadButton from "../../inputs/UploadButton";

export const ArticleCreate = (props: CreateProps): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <UploadButton source="cover" label="cover" />
      <SelectInput
        source="postType"
        choices={[
          { id: "video", name: "Video" },
          { id: "audio", name: "Audio" },
          { id: "audio_list", name: "AudioList" },
          { id: "gallery", name: "Gallery" },
          { id: "image", name: "Image" },
          { id: "quote", name: "Quote" },
          { id: "text", name: "Text" },
        ]}
      />
      <FormDataConsumer subscription={{ values: true }}>
        {({ formData, ...rest }) => {
          console.log({ formData });

          switch (formData.postType) {
            case "video":
              return (
                <UploadButton
                  accept="video/*"
                  source="video"
                  label="post video"
                />
              );

            case "image":
              return (
                <UploadButton
                  accept="image/*"
                  source="image"
                  label="post image"
                />
              );

            default:
              return <div>text_input</div>;
          }
        }}
      </FormDataConsumer>
      <RichEditor source="body" />
    </SimpleForm>
  </Create>
);
