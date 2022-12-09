import {ReviewContentFragment} from "../../graphql/generated/graphql";

interface ProductReviewsListItemProps {
    review: ReviewContentFragment
}
const ProductReviewsListItem = ({ review }: ProductReviewsListItemProps) => {
    return (
        <li>
            <h3>{review.headline}</h3>
            <div>{review.rating}</div>
            <p>{review.content}</p>
            <footer>{review.name}</footer>
        </li>
    )
}

export default ProductReviewsListItem;