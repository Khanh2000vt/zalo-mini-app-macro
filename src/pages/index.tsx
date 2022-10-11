import React from "react";
import { Page, Navbar, NavTitleLarge, Card } from "zmp-framework/react";

const HomePage = () => {
  return (
    <Page name="home" navbarLarge>
      {/* Top Navbar */}
      <Navbar>
        <NavTitleLarge>Coffee Macro</NavTitleLarge>
      </Navbar>
      {/* Page content */}
      <Card inset>
        <p>Khánh</p>
      </Card>
    </Page>
  );
};

export default HomePage;
