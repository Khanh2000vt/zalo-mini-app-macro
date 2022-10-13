import React from "react";
import { Button, Link, Text } from "zmp-framework/react";
import { IShop, ITime } from "../../service";
interface IState {
  shop: IShop;
}

const getTimeShopOpen = (open: ITime, close: ITime) => {
  const hourOpen: string = open.hour < 10 ? "0" + open.hour : "" + open.hour;
  const minuteOpen: string =
    open.minute < 10 ? "0" + open.minute : "" + open.minute;
  const hourClose: string =
    close.hour < 10 ? "0" + close.hour : "" + close.hour;
  const minuteClose: string =
    close.minute < 10 ? "0" + close.minute : "" + close.minute;
  return hourOpen + "h" + minuteOpen + " - " + hourClose + "h" + minuteClose;
};

function ShopBanner({ shop }: IState) {
  return (
    <div className="shop-banner">
      <img src={shop.avatar} alt={shop.name} className="shop-banner-img" />
      <div className="shop-banner-time">
        <Text className="shop-banner-time-text">
          Giờ mở cửa: {getTimeShopOpen(shop.open, shop.close)}{" "}
        </Text>
      </div>
    </div>
  );
}

export default ShopBanner;
