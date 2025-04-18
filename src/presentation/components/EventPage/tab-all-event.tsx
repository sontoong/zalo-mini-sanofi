import React from "react";
import { TabsProps } from "antd";
import { NotParticipatedTab } from "./not-participated-tab";
import { ParticipatedTab } from "./participated-tab";
import { Tabs } from "../common/tabs";
import { EventSummaryTab } from "./event-summary-tab";

const TabAllEvent = () => {
  return (
    <Tabs
      items={items}
      centered
      className="custom-tabs"
      selectColor="#02733C"
    />
  );
};

export default TabAllEvent;

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <div className="text-sm font-medium">Lịch hội thảo</div>,
    children: <NotParticipatedTab />,
  },
  {
    key: "2",
    label: <div className="text-sm font-medium">Đã đăng ký</div>,
    children: <ParticipatedTab />,
  },
  {
    key: "3",
    label: <div className="text-sm font-medium">Tóm tắt hội thảo</div>,
    children: <EventSummaryTab />,
  },
];
