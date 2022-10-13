import { createStore } from "zmp-framework/core";
import { discount, products, shops } from "./api";
import { ICart, IDiscount, IProduct, IProducts, IShop } from "./service";
interface IState {
  user: any;
  categories: string[];
  selectedAddress: string | null;
  shops: IShop[];
  products: IProducts[];
  cart: ICart[];
  shipping: IProduct[];
  discounts: IDiscount[];
  note: string;
  listProduct: IProduct[];
}
interface IParamShop {
  shop: IShop;
  index: number;
}

const initState: IState = {
  user: null,
  categories: ["Cà Phê", "Trà", "Bánh Ngọt", "Thức Uống Khác"],
  selectedAddress: null,
  shops: shops,
  products: products,
  cart: [],
  shipping: [],
  discounts: discount,
  note: "",
  listProduct: [],
};

const store = createStore({
  state: initState,
  actions: {
    getUsers({ state }) {},
    // ...
    getProductFilter({ state }, { shop, index }) {
      const productShop = state.products.find(
        (product) => product.shopID === shop.id
      );
      if (index === -1) {
        state.listProduct = productShop.data;
      } else {
        state.listProduct = productShop.data.filter(
          (product) => product.type === index
        );
      }
    },
  },

  getters: {
    users({ state }) {
      return state.users;
    },
    categories({ state }) {
      return state.categories;
    },
    selectedAddress({ state }) {
      return state.selectedAddress;
    },
    shops({ state }) {
      return state.shops;
    },
    products({ state }) {
      return state.products;
    },
    cart({ state }) {
      return state.cart;
    },
    shipping({ state }) {
      return state.shipping;
    },
    discounts({ state }) {
      return state.discounts;
    },
    note({ state }) {
      return state.note;
    },
    totalQuantity({ state }) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    totalAmount({ state }) {
      return state.cart.reduce(
        (total, item) => total + item.product.subtotal,
        0
      );
    },
    listProduct({ state }) {
      return state.listProduct;
    },
  },
});
export default store;
