import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import { SearchBar } from "../components/common/search-bar";
import {
  CategoryList,
  FeaturedPost,
  Filters,
  PostList,
} from "../components/Homepage";
import { Divider } from "antd";
import { Footer } from "../components/common/footer";

const HomePage: FC = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <div className="relative">
        <Header
          title={
            (
              <div className="pb-[40px] pr-[90px]">
                <div className="text-xl font-bold">Opella.</div>
                <div className="text-sm font-medium">
                  Healthcare Connect Hub
                </div>
              </div>
            ) as unknown as string
          }
          className="topbar no-border h-auto flex-none !bg-primary-gradient !pb-0 pl-4"
          showBackIcon={false}
          textColor="white"
        />
        {/* Search bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-4 px-4">
          <SearchBar
            placeholder="Tìm kiếm từ khóa y khoa"
            className="h-[44px] rounded-[4px] p-3 text-sm font-normal shadow-search-bar"
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-4 pb-6 pt-[40px]">
          <CategoryList />
          <Divider className="m-0 border-2 border-gray1" />
          <Filters />
          <FeaturedPost />
        </div>
        <PostList />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
