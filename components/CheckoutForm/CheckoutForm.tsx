import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {useForm} from "react-hook-form";
import {yupResolver}  from '@hookform/resolvers/yup';
import checkoutFormDataSchema, {CheckoutFormDataType} from "./CheckoutFormData.schema";
import CheckoutFormInput from "./CheckoutFormInput";

const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    // More products...
]

const CheckoutForm = () => {

    const {register, formState, handleSubmit} = useForm<CheckoutFormDataType>({
        resolver: yupResolver(checkoutFormDataSchema)
    });
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className="bg-white">
            {/* Background color split screen for large screens */}
            <div className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true"/>
            <div className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true"/>

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
                <h1 className="sr-only">Order information</h1>

                <section
                    aria-labelledby="summary-heading"
                    className="bg-gray-50 px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
                >
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Order summary
                        </h2>

                        <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
                            {products.map((product) => (
                                <li key={product.id} className="flex items-start space-x-4 py-6">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-20 w-20 flex-none rounded-md object-cover object-center"
                                    />
                                    <div className="flex-auto space-y-1">
                                        <h3>{product.name}</h3>
                                        <p className="text-gray-500">{product.color}</p>
                                        <p className="text-gray-500">{product.size}</p>
                                    </div>
                                    <p className="flex-none text-base font-medium">{product.price}</p>
                                </li>
                            ))}
                        </ul>

                        <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Subtotal</dt>
                                <dd>$320.00</dd>
                            </div>

                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Shipping</dt>
                                <dd>$15.00</dd>
                            </div>

                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Taxes</dt>
                                <dd>$26.80</dd>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">$361.80</dd>
                            </div>
                        </dl>

                        <Popover
                            className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                            <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                                <div className="mx-auto max-w-lg">
                                    <Popover.Button className="flex w-full items-center py-6 font-medium">
                                        <span className="mr-auto text-base">Total</span>
                                        <span className="mr-2 text-base">$361.80</span>
                                        <ChevronUpIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>

                            <Transition.Root as={Fragment}>
                                <div>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transition-opacity ease-linear duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity ease-linear duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="transition ease-in-out duration-300 transform"
                                        enterFrom="translate-y-full"
                                        enterTo="translate-y-0"
                                        leave="transition ease-in-out duration-300 transform"
                                        leaveFrom="translate-y-0"
                                        leaveTo="translate-y-full"
                                    >
                                        <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                                            <dl className="mx-auto max-w-lg space-y-6">
                                                <div className="flex items-center justify-between">
                                                    <dt className="text-gray-600">Subtotal</dt>
                                                    <dd>$320.00</dd>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <dt className="text-gray-600">Shipping</dt>
                                                    <dd>$15.00</dd>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <dt className="text-gray-600">Taxes</dt>
                                                    <dd>$26.80</dd>
                                                </div>
                                            </dl>
                                        </Popover.Panel>
                                    </Transition.Child>
                                </div>
                            </Transition.Root>
                        </Popover>
                    </div>
                </section>

                <form onSubmit={onSubmit} className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <section aria-labelledby="contact-info-heading">
                            <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                Contact information
                            </h2>

                            <div className="mt-6">
                                    <CheckoutFormInput
                                        id="email-address"
                                        label="Email Address"
                                        name="emailAddress"
                                        type="email"
                                        autoComplete="email"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                            </div>
                        </section>

                        <section aria-labelledby="payment-heading" className="mt-10">
                            <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                                Payment details
                            </h2>

                            <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4">
                                <div className="col-span-3 sm:col-span-4">
                                    <CheckoutFormInput
                                        id="name-on-card"
                                        label="Name on card"
                                        name="nameOnCard"
                                        type="text"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div className="col-span-3 sm:col-span-4">
                                    <CheckoutFormInput
                                        id="card-number"
                                        label="Card number"
                                        name="cardNumber"
                                        type="text"
                                        autoComplete="cc-number"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div className="col-span-2 sm:col-span-3">
                                    <CheckoutFormInput
                                        id="expiration-date"
                                        label="Expiration date (MM/YY)"
                                        name="expirationDate"
                                        type="text"
                                        autoComplete="cc-exp"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div>
                                    <CheckoutFormInput
                                        id="cvc"
                                        label="CVC"
                                        name="cvc"
                                        type="text"
                                        autoComplete="csc"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="shipping-heading" className="mt-10">
                            <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
                                Shipping address
                            </h2>

                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                                <div className="sm:col-span-3">
                                    <CheckoutFormInput
                                        id="company"
                                        label="company"
                                        name="company"
                                        type="text"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <CheckoutFormInput
                                        id="address"
                                        label="Address"
                                        name="address"
                                        type="text"
                                        autoComplete="street-address"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <CheckoutFormInput
                                        id="apartment"
                                        label="Apartment, suite, etc."
                                        name="apartment"
                                        type="text"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div>
                                    <CheckoutFormInput
                                        id="city"
                                        label="City"
                                        name="city"
                                        type="text"
                                        autoComplete="address-level2"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div>
                                    <CheckoutFormInput
                                        id="region"
                                        label="State / Province"
                                        name="region"
                                        type="text"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>

                                <div>
                                    <CheckoutFormInput
                                        id="postal-code"
                                        label="Postal code"
                                        name="postalCode"
                                        autoComplete="postal-code"
                                        type="text"
                                        useForm={{
                                            register,
                                            formState
                                        }}
                                    />
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="billing-heading" className="mt-10">
                            <h2 id="billing-heading" className="text-lg font-medium text-gray-900">
                                Billing information
                            </h2>

                            <div className="mt-6 flex items-center">
                                <CheckoutFormInput
                                    label="Same as shipping information"
                                    id="same-as-shipping"
                                    name="sameAsShipping"
                                    type="checkbox"
                                    useForm={{
                                        register,
                                        formState
                                    }}
                                />
                            </div>
                        </section>

                        <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
                            >
                                Continue
                            </button>
                            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                You won&apos;t be charged until the next step.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm;