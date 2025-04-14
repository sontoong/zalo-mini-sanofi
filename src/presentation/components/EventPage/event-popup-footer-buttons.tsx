import React, { FC } from "react";
import { Button } from "../common/button";
import CheckIcon from "../../static/check-icon.svg";
import { StarFilled } from "@ant-design/icons";

export const FooterButtons: FC<Props> = ({
  follow,
  participate,
  toggleFollow,
  toggleParticipate,
}) => {
  return (
    <div className="shadow-footer-buttons flex w-full flex-col gap-[10px] bg-white px-4 py-3">
      {participate ? (
        <Button
          text={
            <div className="flex justify-center gap-[10px]">
              <div className="text-green7 text-base font-medium">
                Đã tham gia
              </div>
              <img src={CheckIcon} alt="" />
            </div>
          }
          className="bg-green2 py-3"
          onClick={toggleParticipate}
        />
      ) : (
        <>
          <Button
            text={
              <div className="text-base font-medium text-white">
                Tham dự trực tuyến
              </div>
            }
            className="bg-primary-gradient py-3"
            onClick={toggleParticipate}
          />
          {follow ? (
            <Button
              text={
                <div className="flex justify-center gap-[10px]">
                  <div className="text-base font-medium text-green4">
                    Đã quan tâm
                  </div>
                  <img src={CheckIcon} alt="" />
                </div>
              }
              className="border border-green3 bg-white py-3"
              onClick={toggleFollow}
            />
          ) : (
            <Button
              text={
                <div className="flex justify-center gap-[10px]">
                  <div className="text-base font-medium text-green4">
                    Quan tâm
                  </div>
                  <StarFilled className="text-yellow4 text-lg" />
                </div>
              }
              className="border border-green3 bg-white py-3"
              onClick={toggleFollow}
            />
          )}
        </>
      )}
    </div>
  );
};

type Props = {
  participate?: boolean;
  follow?: boolean;
  toggleParticipate?: () => void;
  toggleFollow?: () => void;
};
