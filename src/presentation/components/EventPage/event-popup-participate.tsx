import { Card } from "antd";
import React, { FC } from "react";
import { Button } from "../common/button";

export const Participate: FC<Props> = ({ participate }) => {
  return (
    <>
      {participate ? (
        <Card styles={{ body: { padding: "12px" } }} className="shadow-card">
          <div className="flex flex-col gap-3">
            <div className="text-base font-medium">Hình thức tham gia</div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-normal">Link tham gia event</div>
              <div className="flex rounded-lg border border-green3 bg-[#ECFEEE99] p-1">
                <div className="flex flex-1 items-center px-2 text-sm font-medium text-gray6">
                  https://meet.google.com/
                </div>
                <Button
                  text={
                    <div className="text-xs font-medium text-white">Copy</div>
                  }
                  className="bg-primary-gradient2 h-[30px] flex-none rounded-[4px] px-6"
                  onClick={() =>
                    navigator.clipboard.writeText("https://meet.google.com/")
                  }
                />
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card styles={{ body: { padding: "12px" } }} className="shadow-card">
          <div className="flex flex-col gap-3">
            <div className="text-base font-medium">Hình thức tham gia</div>
            <div className="text-sm font-normal text-[#535353]">
              <span>Để nhận được link tham dự, quý BS/DS vui lòng nhấn</span>{" "}
              <span className="text-black">“Tham dự trực tuyến".</span>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

type Props = {
  participate?: boolean;
};
