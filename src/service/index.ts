interface IUser {}

interface IDiscount {
  id: string;
  code: string;
  name: string;
  expireDate: string;
  image: string;
}

interface IProduct {
  id: string;
  name: string;
  type: number;
  image: string;
  price: number;
}

interface IProducts {
  id: string;
  shopID: string;
  data: IProduct[];
}

interface ITime {
  house: number;
  minute: number;
}

interface IShop {
  id: string;
  name: string;
  avatar: string;
  address: string;
  open: ITime;
  close: ITime;
}

export type { IDiscount, IProducts, IProduct, IShop };
