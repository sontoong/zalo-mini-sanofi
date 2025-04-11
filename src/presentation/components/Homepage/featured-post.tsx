import React from "react";
import Featured from "../../static/featured.jpg";
import { useNavigate } from "zmp-ui";

const FeaturedPost = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 px-4" onClick={() => navigate("/post")}>
      <div className="h-[193px] overflow-hidden rounded-lg">
        <img src={Featured} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-[6px]">
          <div className="text-gray5 flex gap-3 text-xs font-normal">
            <div>1 ngày</div>
            <div>Tiêu hoá - miễn dịch</div>
          </div>
          <div className="text-base font-semibold">
            Men uống vi sinh cho đường ruột khoẻ
          </div>
        </div>
        <div className="text-gray6 line-clamp-2 text-xs font-normal">
          Men uống vi sinh giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa,
          giảm đầy hơi, táo bón và tăng cường hấp thu dinh dưỡng
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
