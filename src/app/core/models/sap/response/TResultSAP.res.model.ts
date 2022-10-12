export type TResultSAP<T> = {
  [key in T as string]: T;
} & {
  Message: Message;
};

export interface Message {
  Items: Item;
}

export interface Item {
  Message: string;
  Type: string;
}
