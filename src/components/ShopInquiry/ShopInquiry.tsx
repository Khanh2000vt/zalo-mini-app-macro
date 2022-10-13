import React, { useEffect } from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  List,
  Navbar,
  useStore,
  zmp,
} from "zmp-framework/react";
import { IShop } from "../../service";
import store from "../../store";
interface IState {
  shop: IShop;
}

function ShopInquiry({ shop }: IState) {
  const categories = useStore("categories");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const params = { shop: shop, index: -1 };
    store.dispatch("getProductFilter", params);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const formSelect: any = zmp.form.convertToData("#shop-category");
    const params = { shop: shop, index: +formSelect.category };
    store.dispatch("getProductFilter", params);
  };
  return (
    <Box className="shop-inquiry" px="2">
      <List id="shop-category" className="flex-1 pr-4" form>
        <Input type="select" placeholder="Lựa chọn loại" name="category">
          <option key={"Tất cả"} value={-1}>
            Tất cả
          </option>
          {categories.map((category: string, index: number) => (
            <option key={category} value={index}>
              {category}
            </option>
          ))}
        </Input>
      </List>
      <Button typeName="tertiary" onClick={handleFilter}>
        <Icon zmp="zi-search" size="32" className="m-0"></Icon>
      </Button>
    </Box>
  );
}

{
  /* <Navbar title="List shop">
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
</Navbar>; */
}

export default ShopInquiry;
