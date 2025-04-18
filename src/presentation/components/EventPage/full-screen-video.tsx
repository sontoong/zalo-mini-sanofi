import React, { FC, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import YouTube from "react-youtube";
import ChevronLeft from "../../static/chevron-left.png";
import ShareIcon from "../../static/share.png";

type Props = {
  onClose: () => void;
  videoId: string;
};

export const FullScreenVideo: FC<Props> = ({ onClose, videoId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetHeight - 150,
          height: containerRef.current.offsetWidth,
        });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const opts = {
    height: dimensions.height,
    width: dimensions.width,
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
    },
  };

  return (
    <>
      {createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#313131] py-[16px]">
          <div ref={containerRef} className="relative h-full w-full">
            <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-between py-5">
              {/* Share button */}
              <div className="z-10 flex -rotate-90 items-center">
                <Button
                  text={<img src={ShareIcon} />}
                  onClick={onClose}
                  className="rounded-lg bg-opacity-50 px-4 py-2 text-white hover:bg-opacity-70"
                />
              </div>
              {/* Back button */}
              <div className="z-10 flex -rotate-90 items-center">
                <Button
                  text={<img src={ChevronLeft} />}
                  onClick={onClose}
                  className="rounded-lg bg-opacity-50 px-4 py-2 text-white hover:bg-opacity-70"
                />
              </div>
            </div>

            <div className="flex h-full w-full items-center justify-center">
              <div
                className="-rotate-90 transform"
                style={{
                  width: dimensions.width > 0 ? dimensions.width : "100vh",
                  height: dimensions.height > 0 ? dimensions.height : "100vw",
                }}
              >
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
