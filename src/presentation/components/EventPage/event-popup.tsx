import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import ClockIcon from "../../static/clock-icon.svg";
import CloseIcon from "../../static/close-icon.svg";
import EventBanner from "../../static/event-banner.png";
import PlayTvIcon from "../../static/play-tv-icon.svg";
import ShareIcon from "../../static/share-icon.svg";
import StarIconActive from "../../static/star-icon-active.svg";
import StarIcon from "../../static/star-icon.svg";
import { Button } from "../common/button";
import { Tag } from "../common/tag";
import { Calendar } from "./calendar";
import { EventDetails } from "./event-details";
import { FooterButtons } from "./event-popup-footer-buttons";
import { Participate } from "./participate";
import { SpeakerCollapse } from "./speakers-collapse";

const eventDone = true;

const EventPopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const [participate, setParticipate] = useState<boolean>(false);

  function toggleFollow() {
    setFollow((prev) => !prev);
  }

  function toggleParticipate() {
    setParticipate((prev) => !prev);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] top-[18px] flex items-center text-left">
                <span className="flex-1">Hội thảo khoa học</span>
                <div
                  className="absolute right-0 ml-auto size-[24px]"
                  onClick={() => setVisible(false)}
                >
                  <img src={CloseIcon} alt="" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{ background: "#F8FAF8", paddingTop: "18px" }}
        >
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-4 pt-2">
            {/* Banner */}
            <div className="relative pb-4">
              <div className="h-[193px] overflow-hidden rounded-lg">
                <img
                  src={EventBanner}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute left-[12px] top-[165px]">
                <Calendar month={12} day={12} />
              </div>
            </div>
            {/* Title */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  <div className="font-gilroy text-lg font-semibold leading-6">
                    BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
                  </div>
                  <Tag
                    icon={<img src={ClockIcon} alt="" />}
                    color="#038546"
                    className="flex w-fit gap-1 rounded-xl !border-green3 !bg-green1"
                  >
                    <div>Virtual: 16:00, 12/12/2025</div>
                  </Tag>
                </div>
                <div className="flex flex-col gap-2">
                  <Button.Icon
                    text={<img src={ShareIcon} className="size-[20px]" />}
                    className="size-[32px] rounded-md bg-white shadow-icon-button"
                  />
                  <Button.Icon
                    text={<img src={follow ? StarIconActive : StarIcon} />}
                    className="size-[32px] rounded-md bg-white shadow-icon-button"
                    onClick={toggleFollow}
                  />
                </div>
              </div>
              {/* Xem tóm tắt hội thảo */}
              {eventDone ? (
                <Button
                  text={
                    <div className="flex items-center justify-center gap-[10px]">
                      <span className="text-base font-medium text-white">
                        Xem tóm tắt hội thảo
                      </span>
                      <img src={PlayTvIcon} />
                    </div>
                  }
                  className="rounded-[4px] bg-purple4 py-[10px]"
                />
              ) : null}
            </div>
            {/* Description */}
            <div className="mb-5 flex flex-col gap-3">
              {/* Hình thức tham gia */}
              <Participate participate={participate} />
              {/* Chi tiết hội thảo */}
              <EventDetails />
              {/* Diễn giả */}
              <SpeakerCollapse />
            </div>
          </div>
          {/* Footer buttons */}
          <FooterButtons
            follow={follow}
            participate={participate}
            toggleFollow={toggleFollow}
            toggleParticipate={toggleParticipate}
          />
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export default EventPopup;

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
