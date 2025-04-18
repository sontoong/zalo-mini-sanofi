import { Divider } from "antd";
import React, { FC, useState } from "react";

import { Button } from "../common/button";
import EventPopup from "./event-popup";
import ThumbImage from "../../static/event-banner.png";
import StarIconActive from "../../static/star-icon-active.svg";
import StarIcon from "../../static/star-icon.svg";
import CheckIcon from "../../static/check.png";

const ParticipatedList = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <React.Fragment key={index}>
          <EventPopup>
            {({ open }) => <ParticipatedItem onClick={open} />}
          </EventPopup>
        </React.Fragment>
      ))}
    </div>
  );
};

const ParticipatedItem: FC<ParticipatingItemProps> = ({ onClick }) => {
  const [follow, setFollow] = useState<boolean>(false);

  function toggleFollow(e) {
    e.stopPropagation();
    setFollow((prev) => !prev);
  }

  return (
    <div
      className="shadow-participated-card flex gap-[10px] rounded-lg p-[10px]"
      onClick={onClick}
    >
      <div className="relative size-[90px] shrink-0 overflow-hidden rounded-[4px]">
        <img src={ThumbImage} className="size-full object-cover" />
        <Button.Icon
          text={<img src={follow ? StarIconActive : StarIcon} />}
          className="absolute right-1 top-1 size-[32px] rounded-md bg-white"
          onClick={toggleFollow}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-sm font-medium leading-4">
          BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
        </div>
        <div className="text-xs font-normal text-gray5">
          Virtual: 16:00, 12/12/2025
        </div>
        <div className="flex w-fit items-center gap-1 rounded-[4px] bg-green1 px-2 py-1">
          <div className="text-xs font-medium text-green7">Đã tham gia</div>
          <img src={CheckIcon} alt="" className="size-[18px]" />
        </div>
      </div>
    </div>
  );
};

export { ParticipatedList };

type ParticipatingItemProps = {
  onClick: () => void;
};
