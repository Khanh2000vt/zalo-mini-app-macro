import React, { useState } from "react";
import {
  Link,
  List,
  Navbar,
  NavRight,
  Page,
  Searchbar,
  useStore,
  zmp,
} from "zmp-framework/react";
import { ItemShop } from "../components";
import { IShop } from "../service";

function HomePage() {
  const shops: IShop[] = useStore("shops");
  const items = shops;

  const [data, setData] = useState<any>({
    items: [],
  });

  const searchAll = (query, searchItems) => {
    const found: number[] = [];
    for (let i = 0; i < searchItems.length; i += 1) {
      if (
        searchItems[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        query.trim() === ""
      )
        found.push(i);
    }
    return found;
  };
  const renderExternal = (_, newData) => {
    setData({ ...newData });
  };

  return (
    <Page className="page-demo-searchbar-expandable">
      <Navbar title="List shop">
        <NavRight>
          <Link searchbarEnable=".searchbar-demo" iconZMP="zi-search"></Link>
        </NavRight>
        <Searchbar
          className="searchbar-demo"
          searchContainer=".virtual-list"
          searchItem="li"
          searchIn=".item-title"
          expandable
        />
      </Navbar>
      <List
        className="searchbar-found"
        mediaList
        virtualList
        virtualListParams={{
          items,
          searchAll,
          renderExternal,
          height: 80,
        }}
      >
        <ul>
          {data.items.map((item, index) => (
            <ItemShop
              data={data}
              items={items}
              item={item}
              index={index}
              key={index}
            />
          ))}
        </ul>
      </List>
    </Page>
  );
}

export default HomePage;
