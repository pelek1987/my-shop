import { Rating } from "../Rating";
import { Product } from './Product.types'
import Image from "next/image";
export interface ProductDetailsProps {
    data: Product
}

const ProductDetails = ({ data }: ProductDetailsProps) => {
  return (
    <>
        <div className="bg-white p-4">
            <Image
                layout="responsive"
                width={16}
                height={9}
                objectFit="contain"
                src={data.thumbnailUrl}
                alt={data.thumbnailAlt}
            />
        </div>
        <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
        <p className="p-4">{data.description}</p>
        <Rating rating={data.rating} />
    </>
  );
};

export default ProductDetails;
