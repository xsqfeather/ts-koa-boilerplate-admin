import { videoCollectorCreate } from "./VideoCollectorCreate";
import { VideoCollectorEdit } from "./VideoCollectorEdit";
import { VideoCollectorList } from "./VideoCollectorList";

export default {
  create: videoCollectorCreate,
  list: VideoCollectorList,
  edit: VideoCollectorEdit,
};
