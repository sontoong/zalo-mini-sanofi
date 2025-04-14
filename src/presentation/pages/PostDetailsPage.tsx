import React from "react";
import { Header, Page } from "zmp-ui";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { PostBody, PostFooter, PostTitle } from "../components/PostDetails";

const PostDetails = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title="Tài liệu y khoa"
        className="topbar no-border h-auto flex-none !bg-primary-gradient pl-4"
        backIcon={<ArrowLeftOutlined className="absolute inset-1" />}
        textColor="white"
      />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-5 px-4 pb-6 pt-5">
          <PostTitle />
          <PostBody />
          <PostFooter />
        </div>
      </div>
    </Page>
  );
};

export default PostDetails;
