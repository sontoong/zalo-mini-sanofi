import { Card } from "antd";
import React, { useState } from "react";
import { Button } from "../common/button";
import { clsx } from "clsx";

export const EventDetails = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <Card
      styles={{ body: { padding: "12px 12px 0 12px" } }}
      className="shadow-card"
    >
      <div className="flex flex-col gap-3">
        <div className="text-base font-medium">Chi tiết hội thảo</div>
        <ul
          className={clsx("list-disc pl-6 text-sm font-normal", {
            "line-clamp-[7]": !readMore,
          })}
        >
          <li>
            <span className="font-medium">14:00 - 14:30:</span> Cập nhật chẩn
            đoán, điều trị thoái hóa khớp gối, các quan điểm sai lầm và góc nhìn
            từ bác sĩ ngoại khoa: BS.CKII Phùng Cao Cường - khoa B1 BV 199
          </li>
          <li>
            <span className="font-medium">14:30 - 15:00:</span> Phòng ngừa nguy
            cơ tim phổi cho bệnh nhân COPD - chúng ta đang ở đâu?: BS.CKII
            Nguyễn Thị Nhung - A4 BV 199
          </li>
          <li>
            <span className="font-medium">14:30 - 15:00:</span> Phòng ngừa nguy
            cơ tim phổi cho bệnh nhân COPD - chúng ta đang ở đâu?: BS.CKII
            Nguyễn Thị Nhung - A4 BV 199
          </li>
          <li>
            <span className="font-medium">14:30 - 15:00:</span> Phòng ngừa nguy
            cơ tim phổi cho bệnh nhân COPD - chúng ta đang ở đâu?: BS.CKII
            Nguyễn Thị Nhung - A4 BV 199
          </li>
          <li>
            <span className="font-medium">14:30 - 15:00:</span> Phòng ngừa nguy
            cơ tim phổi cho bệnh nhân COPD - chúng ta đang ở đâu?: BS.CKII
            Nguyễn Thị Nhung - A4 BV 199
          </li>
        </ul>
        <div className="px-3 text-xs font-normal text-gray5">
          #Tim mạch #Cấp cứu #Ngoại tổng quát #Lão khoa #Nội khoa #Cơ xương khớp
          #Y tế gia đình
        </div>
      </div>
      <Button
        text={
          <div className="text-green5 text-sm font-semibold">
            {readMore ? "Ẩn bớt" : "Xem thêm"}
          </div>
        }
        className="w-full py-3"
        onClick={() => setReadMore((prev) => !prev)}
      />
    </Card>
  );
};
