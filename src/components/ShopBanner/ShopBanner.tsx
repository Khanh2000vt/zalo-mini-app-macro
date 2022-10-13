import React from "react";
import { IShop } from "../../service";
interface IState {
  shop: IShop;
}
function ShopBanner({ shop }: IState) {
  return (
    <div className="shop-banner">
      <img src={shop.avatar} alt={shop.name} className="shop-banner-img" />
    </div>
  );
}

export default ShopBanner;
