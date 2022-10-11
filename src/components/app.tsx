import React from "react";
import { App, Link, Tabbar, TabView, View } from "zmp-framework/react";
import { RecoilRoot } from "recoil";

const MyApp = () => {
  // ZMP Parameters
  const zmpparams = {
    name: "Coffee Macro", // App name
    theme: "auto", // Automatic theme detection
  };

  const NavigationBar = () => (
    <Tabbar id="main-nav" bottom>
      <Link tabLink="#view-main" tabLinkActive iconZMP="zi-home">
        Home
      </Link>
      <Link tabLink="#view-discount" iconZMP="zi-reminder">
        Discount
      </Link>
      <Link tabLink="#view-history" iconZMP="zi-clock-1">
        History
      </Link>
    </Tabbar>
  );
  return (
    <RecoilRoot>
      <App {...zmpparams}>
        {/* Your main view, should have "view-main" class */}
        {/* <View main className="safe-areas" url="/" /> */}
        <TabView className="safe-areas">
          <NavigationBar />
          <View
            id="view-main"
            main
            tabActive
            tab
            url="/"
            initRouterOnTabShow
            name="home"
            className="safe-areas"
          ></View>
          <View
            id="view-discount"
            name="discount"
            className="safe-areas"
            initRouterOnTabShow
            tab
            url="/discount/"
          ></View>
          <View
            id="view-history"
            name="history"
            main
            className="safe-areas"
            initRouterOnTabShow
            tab
            url="/history/"
          ></View>
        </TabView>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
