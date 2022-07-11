export type Order = {
  ingredients: string[];
  _id: string;
  createdAt: string;
  status: string;
  isOrderPage: string;
  name: string;
  number: number;
  sum?: number;
  images?: string[];
};

export type Orders = Order[];
