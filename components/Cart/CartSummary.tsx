import {useCartContext} from "./CartContext";

const CartSummary = () => {
    const cartContext = useCartContext();

    return (
        <div>
            <h2>Cart Summary:</h2>
            <div className="font-bold">Liczba elementów: {cartContext.items.length}</div>
        </div>
    );
}

export default CartSummary