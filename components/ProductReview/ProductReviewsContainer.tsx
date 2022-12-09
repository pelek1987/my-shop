import ProductReviewsList from "./ProductReviewsList";

const ProductReviewsContainer = ({ productSlug }: {productSlug: string}) => {
    return (
        <div>
            <ProductReviewsList productSlug={productSlug} />
        </div>
    )
}

export default ProductReviewsContainer