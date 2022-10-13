import { createStore } from "zmp-framework/core";
import { discount, products, shops } from "./api";
import { IDiscount, IProduct, IProducts, IShop } from "./service";
interface IState {
  user: any;
  categories: string[];
  selectedAddress: string | null;
  shops: IShop[];
  products: IProducts[];
  cart: IProduct[];
  shipping: IProduct[];
  discounts: IDiscount[];
  note: string;
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
};

const store = createStore({
  state: initState,
  actions: {
    getUsers({ state }) {
      //   // gọi api
      //   fetch('some-url')
      //     .then((res) => res.jsstate
      //     .then((users) => {
      //       // gán users trả về cho state
      //       state.users = users;
      //     });
    },
    // ...
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
      return state.cart.reduce((total, item) => total + item.subtotal, 0);
    },
  },
});
export default store;
