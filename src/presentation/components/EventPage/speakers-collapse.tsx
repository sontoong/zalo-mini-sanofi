import { Collapse, Divider } from "antd";
import React, { FC } from "react";
import DoctorImg from "../../static/doctor.png";

const SpeakerCollapse = () => {
  return (
    <Collapse
      className="shadow-card"
      expandIconPosition="end"
      bordered={false}
      defaultActiveKey={["0"]}
      items={[
        {
          label: <div className="text-base font-medium">Diễn giả</div>,
          children: <SpeakerList />,
          style: {
            background: "white",
            border: "none",
            borderRadius: "8px",
          },
          styles: {
            header: {
              padding: "12px",
            },
            body: {
              padding: "0 12px 12px 12px",
            },
          },
        },
      ]}
    />
  );
};

const SpeakerList: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          <SpeakerItem />
          {index < 1 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const SpeakerItem: FC = () => {
  return (
    <div className="flex gap-3">
      <div className="shadow-avatar size-[50px] overflow-hidden rounded-full border border-white">
        <img src={DoctorImg} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium">BS.CKII Nguyễn Minh Lài</div>
        <div className="text-xs font-normal text-gray5">
          Khoa tai mũi họng - dị ứng
        </div>
      </div>
    </div>
  );
};

export { SpeakerCollapse };
