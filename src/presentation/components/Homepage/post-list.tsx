import { Divider } from "antd";
import React, { FC } from "react";
import PostImg from "../../static/post1.png";

const PostList = () => {
  return (
    <div className="flex flex-col gap-[14px] rounded-tr-[40px] bg-[#FAFAF2] px-4 pb-6 pt-5">
      <div className="border-l-2 border-green4 pl-3">
        <div className="text-xl font-semibold">Tất cả</div>
      </div>
      <div className="flex flex-col gap-3">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <PostListItem {...post} />
            {index < posts.length - 1 && (
              <Divider className="m-0 border-gray2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const PostListItem: FC<PostListProps> = ({ brief, image, title }) => {
  return (
    <div className="flex h-[74px] items-center gap-3">
      <div className="aspect-square h-full shrink-0 overflow-hidden rounded-md">
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-medium">{title}</div>
        <div className="line-clamp-2 text-xs font-normal text-gray6">
          {brief}
        </div>
      </div>
    </div>
  );
};

export default PostList;

type PostListProps = {
  image: string;
  title: string;
  brief: string;
};

const posts = [
  {
    image: PostImg,
    title: "Men uống vi sinh cho đường ruột khoẻ",
    brief:
      "Men uống vi sinh giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa, giảm đầy hơi, táo bón và tăng cường hấp thu dinh dưỡng",
  },
  {
    image: PostImg,
    title: "Men uống vi sinh cho đường ruột khoẻ",
    brief:
      "Men uống vi sinh giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa, giảm đầy hơi, táo bón và tăng cường hấp thu dinh dưỡng",
  },
  {
    image: PostImg,
    title: "Men uống vi sinh cho đường ruột khoẻ",
    brief:
      "Men uống vi sinh giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa, giảm đầy hơi, táo bón và tăng cường hấp thu dinh dưỡng",
  },
];
