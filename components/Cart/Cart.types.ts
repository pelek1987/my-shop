export interface CartItem {
    title: string;
    price: number;
}

export interface CartState {
    items: CartItem[];
}