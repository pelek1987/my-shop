export interface CartItem {
    id: number;
    title: string;
    price: number;
    count: number;
}

export interface CartState {
    items: readonly CartItem[] | undefined;
    addItemToCart: (item: CartItem) => void;
    removeItemFromCart: (id: CartItem['id']) => void
}