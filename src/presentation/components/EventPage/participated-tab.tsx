import React from "react";
import { ParticipatedList } from "./participated-list";

export const ParticipatedTab = () => {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4">
      <div className="text-xl font-semibold">Hội thảo đã đăng ký</div>
      {/* List */}
      <ParticipatedList />
    </div>
  );
};
