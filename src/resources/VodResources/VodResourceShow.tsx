import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ShowProps,
  ImageField,
  useRecordContext,
  FieldProps,
  RichTextField,
} from "react-admin";
import VideoPlayer from "../../components/VideoPlayer";

const VodResourceUrlField = (props: FieldProps): React.ReactElement => {
  const { source } = props;
  const record = useRecordContext(props);
  if (!source) {
    return <></>;
  }
  const url = record[source];
  const urlWords = url.split("$");
  const m3u8Addresses = [];
  for (let index = 0; index < urlWords.length; index++) {
    const word = urlWords[index];
    if (word.includes("m3u8")) {
      m3u8Addresses.push(word.replace(/\.m3u8.*?/, ".m3u8"));
    }
  }

  return (
    <div>
      {m3u8Addresses.map((ad) => (
        <div
          style={{
            width: "80%",
            maxWidth: 800,
          }}
        >
          <VideoPlayer src={ad} />
        </div>
      ))}
    </div>
  );
};

export const VodResourceShow = (props: ShowProps): React.ReactElement => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="vod_name" />
      <RichTextField source="vod_content" />
      <RichTextField source="vod_actor" />
      <RichTextField source="vod_play_url" />
      <ImageField source="vod_pic" />
      <VodResourceUrlField source="vod_play_url" />
      <DateField source="createdAt" />
    </SimpleShowLayout>
  </Show>
);
