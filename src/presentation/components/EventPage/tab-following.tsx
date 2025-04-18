import React from "react";
import { FollowingEventList } from "./following-event-list";

const TabFollowingEvent = () => {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">Hội thảo bạn quan tâm</div>
      </div>
      {/* List */}
      <FollowingEventList />
    </div>
  );
};

export default TabFollowingEvent;
