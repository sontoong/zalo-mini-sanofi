import React from "react";
import { Header, Page } from "zmp-ui";
import { Footer } from "../components/common/footer";
import { Button } from "../components/common/button";
import { EventPopup } from "../components/EventPage";

const EventPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="pb-[40px] pr-[90px]">
              <div className="text-xl font-bold">Opella.</div>
              <div className="text-sm font-medium">Healthcare Connect Hub</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-primary-gradient !pb-0 pl-4"
        showBackIcon={false}
        textColor="white"
      />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-5 px-4 pb-6 pt-5">
          <EventPopup>
            {({ open }) => <Button text="Open popup" onClick={open} />}
          </EventPopup>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default EventPage;
