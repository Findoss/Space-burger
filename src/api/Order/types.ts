export type OrderId = string;

export type OrderRaw = {
  data: {
    _id: OrderId;
  };
};

export type Order = {
  id: OrderId;
};
