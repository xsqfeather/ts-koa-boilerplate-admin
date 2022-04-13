import React from "react";
import { Player } from "video-react";
import HLSSource from "./HLSSource";

export default (props: { src: string }): React.ReactElement => {
  return (
    <Player>
      <HLSSource isVideoChild src={props.src} />
    </Player>
  );
};
