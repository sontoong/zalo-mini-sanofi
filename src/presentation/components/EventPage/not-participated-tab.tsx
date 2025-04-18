import React from "react";
import { Button } from "../common/button";
import RightIcon from "../../static/right-circle-icon.svg";
import LeftIcon from "../../static/left-circle-icon.svg";
import { Select } from "../common/select";
import { NotParticipatedList } from "./not-participated-list";
import DownArrowIcon from "../../static/arrow-down-icon.svg";

export const NotParticipatedTab = () => {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold">Hội thảo chưa đăng ký</div>
        <div className="flex justify-between">
          <Select
            placeholder="Chọn tháng"
            variant="borderless"
            defaultValue={"3"}
            options={[
              { value: "1", label: "Tháng 10/2024" },
              { value: "2", label: "Tháng 11/2024" },
              { value: "3", label: "Tháng 12/2024" },
            ]}
            popupMatchSelectWidth={false}
            className="custom-select -ml-[11px]"
            fontSize={18}
            optionFontSize={16}
            suffixIcon={<img src={DownArrowIcon} />}
          />
          <div className="flex gap-2">
            <Button.Icon
              text={<img src={LeftIcon} className="size-[24px]" />}
            />
            <Button.Icon
              text={<img src={RightIcon} className="size-[24px]" />}
            />
          </div>
        </div>
      </div>
      {/* List */}
      <NotParticipatedList />
    </div>
  );
};
