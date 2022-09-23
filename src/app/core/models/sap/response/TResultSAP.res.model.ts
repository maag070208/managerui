export interface TResultSAP<T> {

    (key: T): T;
    Message:            Message;
}

export interface Message {
    Item: Item;
}

export interface Item {
    Message: string;
    Type:    string;
}