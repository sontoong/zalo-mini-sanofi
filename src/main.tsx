/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, Box, SnackbarProvider, ZMPRouter } from "zmp-ui";

import { validateMessages } from "./presentation/constants/validate-messages";
import HomePage from "./presentation/pages/HomePage";
import PostDetailsPage from "./presentation/pages/PostDetailsPage";
import EventPage from "./presentation/pages/EventPage";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);

import { AppProvider } from "./presentation/context/AppContext";

const AppRoutes = () => {
  return (
    <AnimationRoutes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/post" element={<PostDetailsPage />}></Route>
      <Route path="/event" element={<EventPage />}></Route>
    </AnimationRoutes>
  );
};

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#065710",
              fontFamily:
                "'Gilroy', 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <ZMPRouter>
                <AppProvider>
                  <Box flex flexDirection="column" className="h-screen">
                    <Box className="flex flex-1 flex-col overflow-hidden">
                      <AppRoutes />
                      <ToastContainer style={{ marginTop: "48px" }} />
                    </Box>
                  </Box>
                </AppProvider>
              </ZMPRouter>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
