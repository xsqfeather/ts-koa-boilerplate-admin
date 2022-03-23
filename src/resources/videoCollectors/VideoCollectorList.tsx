import { IconButton } from "@mui/material";
import { Fragment } from "react";
import {
  BulkDeleteButton,
  Datagrid,
  FieldProps,
  List,
  ListProps,
  TextField,
  useRecordContext,
  useRefresh,
  useUpdate,
} from "react-admin";
import { PublishManyButton } from "../../buttons/PublishButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostBulkActionButtons = (props: any): JSX.Element => (
  <Fragment>
    <PublishManyButton {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton />
  </Fragment>
);

const CreeperStatusField = (props: FieldProps): JSX.Element => {
  const [update] = useUpdate();
  const refresh = useRefresh();
  const { source } = props;
  const record = useRecordContext(props);
  if (!source) {
    return <></>;
  }
  const diff = { status: record[source] === "STOP" ? "RUNNING" : "STOP" };
  const handlePlayBtn = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.stopPropagation();
    await update("videoCollectors", record.id, diff, record);
    setTimeout(() => {
      refresh();
    }, 2500);
  };
  return (
    <>
      {record[source] === "STOP" && (
        <IconButton onClick={handlePlayBtn}>
          <PlayArrowIcon />
        </IconButton>
      )}

      {record[source] === "RUNNING" && (
        <IconButton onClick={handlePlayBtn}>
          <PauseIcon />
        </IconButton>
      )}
    </>
  );
};

export const VideoCollectorList = (props: ListProps): JSX.Element => (
  <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="url" />
      <TextField source="type" />
      <TextField source="currentPage" />
      <CreeperStatusField source="status" />
    </Datagrid>
  </List>
);
