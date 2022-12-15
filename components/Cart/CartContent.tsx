import {useCartContext} from "./CartContext";
import {TrashIcon} from "@heroicons/react/24/outline"
import {loadStripe} from "@stripe/stripe-js";
import {Stripe} from "stripe";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const CartContent = () => {
    const cartContext = useCartContext();

    const pay = async () => {
        const stripe = await stripePromise

        if (!stripe) {
            throw new Error('Something went wrong.')
        }
        if (!cartContext.items) {
            throw new Error('Could not confirm order.')
        }

        const stripeLineItems = cartContext.items.map(item => ({
            slug: item.id,
            count: item.count
        }))

        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stripeLineItems)
        })

        const {session}: { session: Stripe.Response<Stripe.Checkout.Session> } = await res.json();

        await stripe.redirectToCheckout({sessionId: session.id});
    }

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
                onClick={pay}
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Confirm Order
            </button>
        </div>
    )
}

export default CartContent;