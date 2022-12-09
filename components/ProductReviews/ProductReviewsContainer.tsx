import ProductReviewsList from "./ProductReviewsList";
import ProductReviewsForm from "./ProductReviewsForm";

const ProductReviewsContainer = ({ productSlug }: {productSlug: string}) => {
    return (
        <div className="max-w-md mx-auto">
            <ProductReviewsForm productSlug={productSlug}/>
            <ProductReviewsList productSlug={productSlug} />
        </div>
    )
}

export default ProductReviewsContainer