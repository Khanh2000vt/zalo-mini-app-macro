import React from "react";
import { Page } from "zmp-framework/react";
import { ShopBanner, ShopHeading } from "../components";

function ShopDetail(props) {
  const { shop } = props;
  console.log("shop: ", shop);
  return (
    <Page>
      <ShopHeading shop={shop} />
      <ShopBanner shop={shop} />
    </Page>
  );
}

export default ShopDetail;
