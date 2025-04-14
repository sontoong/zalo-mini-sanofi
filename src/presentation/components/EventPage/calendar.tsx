import React, { FC } from "react";

const Calendar: FC<Props> = ({ month, day }) => {
  return (
    <div className="w-[53px] shadow-calendar">
      <div className="relative flex h-[15px] items-center justify-center rounded-t-[3px] bg-[#CE4646]">
        <div className="absolute -top-[7px] left-[13%] h-[13px] w-[4px] rounded-lg bg-[#272C33]"></div>
        {/* Month number */}
        <div className="text-[10px] font-semibold text-white">Th{month}</div>
        <div className="absolute -top-[7px] right-[13%] h-[13px] w-[4px] rounded-lg bg-[#272C33]"></div>
      </div>

      <div className="flex h-[37px] items-center justify-center rounded-b-[3px] bg-white">
        {/* Day number */}
        <div className="align-middle text-2xl font-bold text-black">{day}</div>
      </div>
    </div>
  );
};

export { Calendar };

type Props = {
  month: number;
  day: number;
};
