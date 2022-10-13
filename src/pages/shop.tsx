import React from "react";
import { Page, Sheet } from "zmp-framework/react";
import {
  ShopBanner,
  ShopHeading,
  ShopInquiry,
  ShopListProduct,
} from "../components";

function ShopDetail(props) {
  const { shop } = props;
  return (
    <Page>
      <ShopHeading shop={shop} />
      <ShopBanner shop={shop} />
      <ShopInquiry shop={shop} />
      <ShopListProduct />
    </Page>
  );
}

export default ShopDetail;
