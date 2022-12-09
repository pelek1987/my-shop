import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import productReviewFormInputSchema, {ProductReviewsFormInputType} from "./productReviewInputSchema";

const ProductReviewsForm = ({ productSlug }: {productSlug: string}) => {
    const {register, handleSubmit} = useForm<ProductReviewsFormInputType>({
        resolver: yupResolver(productReviewFormInputSchema)
    });

    const onSubmit = handleSubmit((data) => {});
    return (
        <form onSubmit={onSubmit} className="flex gap-4 flex-col items-center">
            <input
                type="text"
                required
                placeholder="Headline"
                {...register('headline')}
                className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
            />
            <input
                type="number"
                required
                placeholder="Rating"
                {...register('rating')}
                className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
            />
            <input
                type="text"
                required
                placeholder="Content"
                {...register('content')}
                className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
            />
            <input
                type="text"
                required
                placeholder="Name"
                {...register('name')}
                className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
            />
            <input
                type="email"
                required
                placeholder="E-mail"
                {...register('email')}
                className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add Review
                </button>
            </div>
        </form>
    )
}

export default ProductReviewsForm;