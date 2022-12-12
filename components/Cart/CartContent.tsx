import {useCartContext} from "./CartContext";
import {TrashIcon} from "@heroicons/react/24/outline"

const CartContent = () => {
    const cartContext = useCartContext();

    return (
        <div className="col-span-2">
            <ul className="divide-y divide-gray-200">
                {cartContext.items?.map((item, idx) => <li
                    className="py-4"
                    key={`${item.title}-${idx}`}
                >
                    <div className="flex justify-between">
                        <div>{item.count} x {item.title}</div>
                        <div>{item.price}
                            <button className="ml-4 text-red-500"
                                    onClick={() => cartContext.removeItemFromCart(item.id)}><TrashIcon
                                className="h-6 w-6"/></button>
                        </div>
                    </div>
                </li>)}
            </ul>
            <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Order
            </button>
        </div>
    )
}

export default CartContent;