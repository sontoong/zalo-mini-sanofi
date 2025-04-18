import React, { FC, useState } from "react";

import { Button } from "../common/button";
import EventPopup from "./event-popup";
import ThumbImage from "../../static/event-banner.png";
import StarIconActive from "../../static/star-icon-active.svg";
import CloseIcon from "../../static/close-icon.svg";
import StarIcon from "../../static/star-icon.svg";
import { Modal } from "zmp-ui";

const FollowingEventList = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <React.Fragment key={index}>
          <EventPopup>
            {({ open }) => <FollowingEventItem onClick={open} />}
          </EventPopup>
        </React.Fragment>
      ))}
    </div>
  );
};

const FollowingEventItem: FC<ParticipatingItemProps> = ({ onClick }) => {
  const [follow, setFollow] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleFollow(e) {
    e.stopPropagation();
    if (follow) {
      showModal();
    }
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setFollow((prev) => !prev);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        visible={isModalOpen}
        title={
          (
            <>
              <div className="text-balance text-base font-semibold text-[#474747]">
                Bạn chắc chắn muốn huỷ quan tâm hội thảo này?
              </div>
              <div
                className="absolute right-3 top-3 size-[24px]"
                onClick={handleCancel}
              >
                <img src={CloseIcon} alt="" className="size-full" />
              </div>
            </>
          ) as unknown as string
        }
        onClose={() => {
          setIsModalOpen(false);
        }}
        verticalActions
      >
        <div className="mt-5 flex gap-[10px]">
          <Button
            text={<div className="text-sm font-medium">Đóng</div>}
            className="rounded-[4px] bg-gray1 px-3 py-[10px]"
            onClick={handleCancel}
          />
          <Button
            text={
              <div className="text-sm font-medium text-white">Hủy quan tâm</div>
            }
            className="bg-red4 rounded-[4px] px-3 py-[10px]"
            onClick={handleOk}
          />
        </div>
      </Modal>
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
        <div className="flex flex-col gap-[9px]">
          <div className="text-sm font-medium leading-4">
            BEST OFWAC: Cập nhật chẩn đoán và điều trị viêm mũi dị ứng
          </div>
          <div className="text-xs font-normal text-gray5">
            Virtual: 16:00, 12/12/2025
          </div>
        </div>
      </div>
    </>
  );
};

export { FollowingEventList };

type ParticipatingItemProps = {
  onClick: () => void;
};
