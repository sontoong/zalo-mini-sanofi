import React, { useState } from "react";
import { Header, Page } from "zmp-ui";
import { Footer } from "../components/common/footer";
import { TabAllEvent } from "../components/EventPage";
import { Segmented, SegmentedProps } from "antd";
import { StarFilled } from "@ant-design/icons";
import TabFollowingEvent from "../components/EventPage/tab-following";

const EventPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="pb-[10px] pr-[90px]">
              <div className="text-xl font-bold">Opella.</div>
              <div className="text-sm font-medium">Healthcare Connect Hub</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-primary-gradient !pb-0 pl-4"
        showBackIcon={false}
        textColor="white"
      />
      <div className="flex-1 overflow-auto">
        <div className="px-4 py-3">
          <Segmented
            options={tabOptions}
            onChange={(value) => {
              setCurrentTab(value);
            }}
            value={currentTab}
            size="large"
            block
          />
        </div>
        {tabs[currentTab]}
      </div>
      <Footer />
    </Page>
  );
};

export default EventPage;

const tabOptions: SegmentedProps<number>["options"] = [
  { label: "Tất cả", value: 1 },
  {
    label: "Quan tâm",
    value: 2,
    icon: <StarFilled className="text-gray3" />,
  },
];

const tabs = { 1: <TabAllEvent />, 2: <TabFollowingEvent /> };
