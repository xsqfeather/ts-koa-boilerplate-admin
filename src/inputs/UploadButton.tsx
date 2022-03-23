import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { InputProps, useInput } from "react-admin";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

export default function UploadButton(props: InputProps): React.ReactElement {
  const {
    input: { name, onChange, value, ...rest },
  } = useInput(props);

  const { accept } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <FormControl variant="standard">
        <label htmlFor={`${props.source}-upload-id`}>
          <Input
            accept={accept}
            id={`${props.source}-upload-id`}
            multiple
            name={name}
            type="file"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={async (e: any): Promise<void> => {
              const formData = new FormData();
              formData.append("file", e.target.files[0]);
              try {
                const rlt = await axios.post(
                  "http://localhost:8001/api/v1/articles/edit/upload?accept=" +
                    accept,
                  formData
                );
                onChange(rlt.data.location);
              } catch (error: any) {
                alert(error.response.data.reason);
              }
            }}
            {...rest}
          />
          <Button variant="contained" component="span">
            Upload {props.label}
          </Button>
        </label>
      </FormControl>
      {value && (
        <img
          style={{
            maxWidth: 300,
          }}
          src={value}
        />
      )}
    </Stack>
  );
}
