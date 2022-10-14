import { Rating } from "../Rating";
import { Product } from './Product.types'
export interface ProductDetailsProps {
    data: Product
}

const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
        <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
        <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
        <p className="p-4">{data.description}</p>
        <Rating rating={data.rating} />
    </>
  );
};

export default ProductDetails;
