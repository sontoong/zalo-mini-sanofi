import { Divider } from "antd";
import React, { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { FullScreenVideo } from "./full-screen-video";

const EventSummaryList = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const onCloseFullscreenVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <>
      <div className="flex flex-col gap-[14px]">
        {vids.map((id, index) => (
          <React.Fragment key={index}>
            <EventSummaryItem videoId={id} setCurrentVideo={setCurrentVideo} />
            {index < vids.length - 1 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        ))}
      </div>
      <FullScreenVideo
        onClose={onCloseFullscreenVideo}
        videoId={currentVideo}
      />
    </>
  );
};

const EventSummaryItem: FC<{ videoId: string; setCurrentVideo: any }> = ({
  videoId,
  setCurrentVideo,
}) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "192px",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
    },
  };

  const playVideo = (e) => {
    e.stopPropagation();
    setCurrentVideo(videoId);
  };

  return (
    <div className="flex flex-col gap-3" onClick={playVideo}>
      <div className="relative overflow-hidden rounded-lg">
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        <div className="absolute inset-0 z-10" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-sm font-medium text-[#474747]">
          BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
        </div>
        <div className="text-xs font-normal text-gray6">
          Virtual: 16:00, 12/12/2025
        </div>
      </div>
    </div>
  );
};

export { EventSummaryList };

const vids = ["2g811Eo7K8U", "O5O3yK8DJCc"];
