/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { InputProps, useInput } from "react-admin";

export default function RichEditor(props: InputProps): JSX.Element {
  const {
    input: { onChange, value },
  } = useInput(props);

  const editorRef = useRef(null);

  return (
    <Paper
      elevation={3}
      style={{
        padding: 10,
      }}
    >
      <Editor
        onInit={(_ev: any, editor: any): void => {
          editorRef.current = editor;
        }}
        id={"tiny-react_96560485821636127960461"}
        init={{
          language: "zh_CN",
          menubar: "",
          plugins: "code image ",
          toolbar:
            "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image",
          images_upload_url: "http://localhost:8001/api/v1/storageFiles",
          // automatic_uploads: false,
          // block_unsupported_drop: false,
          // automatic_uploads: true,
          // images_upload_handler: (image: any): void => {
          //   console.log({ image });

          //   return;
          // },
          placeholder: "type your content",
        }}
        onEditorChange={(newValue: string): void => onChange(newValue)}
        value={value}
        tinymceScriptSrc={
          "http://localhost:8001/statics/plugins/tinymce/tinymce.min.js"
        }
      ></Editor>
    </Paper>
  );
}
