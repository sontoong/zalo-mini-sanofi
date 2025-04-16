import React from "react";
import { Tabs, TabsProps } from "antd";
import { NotParticipatedTab } from "./not-participated-tab";

const TabAllEvent = () => {
  return <Tabs items={items} centered className="custom-tabs" />;
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
    children: "Đã đăng ký",
  },
  {
    key: "3",
    label: <div className="text-sm font-medium">Tóm tắt hội thảo</div>,
    children: "Tóm tắt hội thảo",
  },
];
