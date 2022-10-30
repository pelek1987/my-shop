import {createContext, ReactNode, useContext, useState} from "react";
import {CartItem, CartState} from "./Cart.types";

const CartContext = createContext<CartState | null>(null)

export const useCartContext = () => {
    const cartContext = useContext(CartContext);
    if(!cartContext) throw new Error('You forgot to use CartContextProvider.');

    return cartContext
}

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [cartItems,] = useState<CartItem[]>([
        {
            title: 'Koszula',
            price: 23.5
        },
    ])
    return (<CartContext.Provider value={{items: cartItems}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider;