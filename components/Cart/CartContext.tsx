import {createContext, ReactNode, useContext, useState} from "react";
import {CartItem, CartState} from "./Cart.types";

const CartContext = createContext<CartState | null>(null)

export const useCartContext = () => {
    const cartContext = useContext(CartContext);
    if(!cartContext) throw new Error('You forgot to use CartContextProvider.');

    return cartContext
}

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItemToCart = (itemToAdd: CartItem) => {
        setCartItems((prevState) => {
            const existingItem = prevState.find(item => item.id === itemToAdd.id);
            if(existingItem) {
                return prevState.map(item => {
                    if(item.id === itemToAdd.id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }
                    return item;
                })
            }
            return [...prevState, itemToAdd]
        });
    }

    const removeItemFromCart = (id: CartItem['id']) => {
        setCartItems((prevState) => {
            const existingItem = prevState.find(item => item.id === id);
            if(existingItem && existingItem.count > 1) {
                return prevState.map(item => {
                    if(item.id === id) {
                        return {
                            ...item,
                            count: item.count - 1,
                        }
                    }
                    return item;
                })
            }
            return prevState.filter(item => item.id !== id);
        })
    }

    const values: CartState = {
        items: cartItems,
        addItemToCart,
        removeItemFromCart
    }


    return (<CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider;