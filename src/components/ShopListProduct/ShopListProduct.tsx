import React, { useRef } from "react";
import { List, Sheet, useStore } from "zmp-framework/react";
import "../../css/shop.scss";
import { IProduct } from "../../service";
import ProductItem from "./ProductItem";
import SheetContainer from "./SheetContainer";
function ShopListProduct() {
  const products: IProduct[] = useStore("listProduct");
  const sheet = useRef<any>();

  const handleClick = () => sheet.current.zmpSheet().open();

  return (
    <div className="shop-list-product">
      <List className="list-product">
        {products.map((product) => (
          <ProductItem
            product={product}
            onClick={handleClick}
            key={product.id}
          />
        ))}
      </List>
      <Sheet
        className="sheet-confirm-product"
        ref={sheet}
        title="Chọn thức uống"
        closeButton
        backdrop
        swipeToStep
        swipeToClose
        id="id-sheet-product"
      >
        <SheetContainer />
      </Sheet>
    </div>
  );
}

export default ShopListProduct;
