import React from "react";
import PostImg from "../../static/featured.jpg";
import PostImg2 from "../../static/post2.png";

const PostBody = () => {
  return (
    <div className="flex flex-col gap-5 text-[14px] font-normal">
      <div className="h-[193px] overflow-hidden rounded-lg">
        <img src={PostImg} className="size-full object-cover" />
      </div>
      <div>
        Men uống vi sinh giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa,
        giảm đầy hơi, táo bón và tăng cường hấp thu dinh dưỡng
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="h-[193px] overflow-hidden rounded-lg">
        <img src={PostImg2} className="size-full object-cover" />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default PostBody;
