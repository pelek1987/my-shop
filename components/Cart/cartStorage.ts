import {CartItem} from "./Cart.types";

const localStorageCartItemsKey = 'CART_ITEMS';

export const getCartItemsFromStorage = () => {
    const itemsFromStorage = localStorage.getItem(localStorageCartItemsKey);
    if(!itemsFromStorage) {
        return [];
    }
    try {
        return JSON.parse(itemsFromStorage);
    } catch(err) {
        console.error(err);
        return [];
    }
}

export const saveCartItemsInStorage = (cartItems: CartItem[]) => {
    localStorage.setItem(localStorageCartItemsKey, JSON.stringify(cartItems))
}