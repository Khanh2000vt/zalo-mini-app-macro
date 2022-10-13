import React from "react";
import { Button, Link, Text } from "zmp-framework/react";
import "../../css/shop.scss";
import { IShop } from "../../service";
interface IState {
  shop: IShop;
}
function ShopHeading({ shop }: IState) {
  return (
    <div className="shop-heading">
      {/* <img src={shop.avatar} className="shop-heading-avatar" /> */}
      <Link
        back
        iconZMP="zi-chevron-left-header"
        className="shop-heading-chevron"
      ></Link>
      <div className="shop-heading-information">
        <Text bold className="mb-0">
          Coffee Shop
        </Text>
        <Text className="ellipsis mb-0">
          {shop.name} - {shop.address}
        </Text>
      </div>
      <Button
        fill
        type="button"
        typeName="primary"
        className="shop-heading-button"
      >
        Nhắn tin
      </Button>
    </div>
  );
}

export default ShopHeading;
