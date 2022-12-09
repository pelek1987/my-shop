import {useGetReviewsOfProductSlugQuery} from "../../graphql/generated/graphql";
import ProductReviewsListItem from "./ProductReviewsListItem";

interface ProductReviewsListProps {
    productSlug: string;
}

const ProductReviewsList = ({productSlug}: ProductReviewsListProps) => {
    const {data} = useGetReviewsOfProductSlugQuery({
        variables: {
            slug: productSlug,
        }
    })

    if (!data?.product) {
        return null;
    }

    return (
        <ul>
            {data.product.reviews.map(review => <ProductReviewsListItem key={review.id} review={review}/>)}
        </ul>
    )
}

export default ProductReviewsList;