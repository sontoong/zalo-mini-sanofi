import React from "react";
import { TopicFilter } from "./topic-filter";
import { TimeFiter } from "./time-filter";

const Filters = () => {
  return (
    <div className="flex gap-3 px-3">
      <TopicFilter />
      <TimeFiter />
    </div>
  );
};

export default Filters;
