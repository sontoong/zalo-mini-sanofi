import React from "react";
import { EventSummaryList } from "./event-summary-list";

export const EventSummaryTab = () => {
  return (
    <div className="flex flex-col gap-[14px] px-4 pb-4">
      <div className="text-xl font-semibold">Tóm tắt hội thảo</div>
      {/* List */}
      <EventSummaryList />
    </div>
  );
};
