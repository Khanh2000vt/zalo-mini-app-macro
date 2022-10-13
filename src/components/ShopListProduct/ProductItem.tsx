import React from "react";
import { Text } from "zmp-framework/react";
import { IProduct } from "../../service";
import "../../css/shop.scss";
interface IState {
  product: IProduct;
  onClick: () => void;
}
const ProductItem = ({ product, onClick }: IState) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="product-item" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="product-img" />
      <Text className="product-text">{product.name}</Text>
      <Text className="product-text">{product.price}.000VNĐ</Text>
    </div>
  );
};

export default ProductItem;
