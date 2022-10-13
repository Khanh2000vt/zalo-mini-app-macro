import React from "react";
import { Button, Text } from "zmp-framework/react";
import { IShop } from "../../service";
import "../../css/shop.scss";
interface IState {
  shop: IShop;
}
function ShopHeading({ shop }: IState) {
  return (
    <div className="shop-heading">
      <img src={shop.avatar} className="shop-heading-avatar" />
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
