import React, { useState } from "react";
import ShareIcon from "../../static/share-icon.svg";
import HeartIcon from "../../static/heart-icon.svg";
import DownloadIcon from "../../static/download-icon.svg";
import PdfIcon from "../../static/pdf-icon.svg";
import HeartIconBrown from "../../static/heart-icon-brown.svg";
import HeartIconRed from "../../static/heart-icon-red.svg";
import { Button } from "../common/button";
import { notification } from "antd";

const PostTitle = () => {
  const [api, contextHolder] = notification.useNotification();
  const [favorite, setFavorite] = useState<boolean>(false);

  const openDownloadNotification = () => {
    api.open({
      message: null,
      description: (
        <div className="flex items-center justify-center gap-2">
          <div className="font-openSans text-sm font-medium text-white">
            Đã tải bài viết
          </div>
          <div>
            <img src={PdfIcon} alt="" />
          </div>
        </div>
      ),
      placement: "bottom",
      style: {
        padding: "3px 12px 11px 12px",
        width: "143px",
        borderRadius: "40px",
      },
      closable: false,
      className: "bg-green4 shadow-notification",
    });
  };

  const openFavoriteNotification = () => {
    api.open({
      message: null,
      description: (
        <div className="flex items-center justify-center gap-2">
          <div className="font-openSans text-brown6 text-sm font-medium">
            Đã lưu vào mục yêu thích
          </div>
          <div>
            <img src={HeartIconBrown} alt="" />
          </div>
        </div>
      ),
      placement: "bottom",
      style: {
        padding: "3px 12px 11px 12px",
        width: "221px",
        borderRadius: "40px",
      },
      closable: false,
      className: "bg-brown1 shadow-notification",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="flex flex-col gap-2">
        <div className="text-xl font-medium">
          Men uống vi sinh cho đường ruột khoẻ
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-xs font-normal text-gray6">
            <div>1 ngày</div>
            <div>Tiêu hoá - miễn dịch</div>
          </div>
          <div className="flex gap-3">
            <Button.Icon
              text={<img src={ShareIcon} />}
              className="size-[28px] rounded-full shadow-icon-button"
            />
            <Button.Icon
              text={<img src={favorite ? HeartIconRed : HeartIcon} />}
              className="size-[28px] rounded-full shadow-icon-button"
              onClick={() => {
                setFavorite((prev) => !prev);
                openFavoriteNotification();
              }}
            />
            <Button.Icon
              text={<img src={DownloadIcon} />}
              className="size-[28px] rounded-full shadow-icon-button"
              onClick={() => openDownloadNotification()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostTitle;
