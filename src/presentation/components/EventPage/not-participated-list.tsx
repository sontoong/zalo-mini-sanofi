import React, { FC, useState } from "react";
import ThumbImage from "../../static/event-banner.png";
import StarIconActive from "../../static/star-icon-active.svg";
import StarIcon from "../../static/star-icon.svg";
import { Button } from "../common/button";
import EventPopup from "./event-popup";
import { Divider } from "antd";

const NotParticipatedList = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <React.Fragment key={index}>
          <EventPopup>
            {({ open }) => <NotParticipatedItem onClick={open} />}
          </EventPopup>
          {index < 5 ? (
            <div className="pl-[41px]">
              <Divider className="m-0" />
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const NotParticipatedItem: FC<NotParticipatedItemProps> = ({ onClick }) => {
  const [follow, setFollow] = useState<boolean>(false);

  function toggleFollow(e) {
    e.stopPropagation();
    setFollow((prev) => !prev);
  }

  return (
    <div className="flex items-center gap-[14px]" onClick={onClick}>
      {/* Date */}
      <div className="flex flex-col items-center gap-2">
        <div className="text-[32px] font-semibold text-gray6">1</div>
        <div className="text-sm font-normal text-gray5">Th12</div>
      </div>
      {/* Content */}
      <div className="overflow-hidden rounded-lg">
        <div className="flex gap-[10px] border-l-[4px] border-green4 bg-green1 p-[10px]">
          <div className="relative size-[90px] shrink-0 overflow-hidden rounded-[4px]">
            <img src={ThumbImage} className="size-full object-cover" />
            <Button.Icon
              text={<img src={follow ? StarIconActive : StarIcon} />}
              className="absolute right-1 top-1 size-[32px] rounded-md bg-white"
              onClick={toggleFollow}
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="text-sm font-medium leading-4">
              BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
            </div>
            <div className="text-xs font-normal text-gray5">
              Virtual: 16:00, 12/12/2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotParticipatedList };

type NotParticipatedItemProps = {
  onClick: () => void;
};
