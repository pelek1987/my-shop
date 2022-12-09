import {ReviewContentFragment} from "../../graphql/generated/graphql";

interface ProductReviewsListItemProps {
    review: ReviewContentFragment
}
const ProductReviewsListItem = ({ review }: ProductReviewsListItemProps) => {
    return (
        <li className="border border-2 bg-white shadow-md rounded-md p-2 m-4">
            <h3 className="font-bold">Headline: {review.headline}</h3>
            <div className="text-gray-500">Rating: {review.rating}</div>
            <p className="italic">Description: {review.content}</p>
            <p>Author: {review.name}</p>
        </li>
    )
}

export default ProductReviewsListItem;