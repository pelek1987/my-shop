import {CartContent, CartSummary} from "../components/Cart";

const CartPage = () => {

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-3 gap-8">
                <CartContent />
                <CartSummary />
            </div>
        </div>
    )
}

export default CartPage;