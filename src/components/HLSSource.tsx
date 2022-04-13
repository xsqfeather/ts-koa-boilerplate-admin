import React, { useEffect, useState } from "react";
import Hls from "hls.js";

export default function HLSSource(props: {
  type?: string;
  isVideoChild: boolean;
  src: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  video?: any;
}): React.ReactElement {
  const [hls] = useState(new Hls());

  useEffect(() => {
    const { src, video } = props;
    if (Hls.isSupported()) {
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
    return () => {
      hls.destroy();
    };
  }, []);
  return (
    <source src={props.src} type={props.type || "application/x-mpegURL"} />
  );
}
