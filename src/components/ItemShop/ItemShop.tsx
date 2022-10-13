import React from "react";
import { Avatar, Link, ListItem } from "zmp-framework/react";
import { IShop } from "../../service";
import "../../css/home.scss";
interface IState {
  data: any;
  item: IShop;
  index: number;
  items: IShop[];
}
function ItemShop({ data, item, index, items }: IState) {
  const shop = { shop: item };
  return (
    <Link href="/shop/" routeProps={shop} className="item-shop">
      <ListItem
        key={index}
        mediaItem
        link="#"
        title={item.name}
        subtitle={item.address}
        style={{ top: `${data.topPosition}px` }}
        virtualListIndex={items.indexOf(item)}
        className="item-shop"
      >
        <Avatar src={item.avatar} slot="media"></Avatar>
      </ListItem>
    </Link>
  );
}

export default ItemShop;
