import { Rating } from "..//Rating";
import { ProductProps } from "./Product.types";

const Product = ({ data }: ProductProps) => {
  return (
    <>
      <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
      <p>{data.description}</p>
      <Rating rating={data.rating} />
    </>
  );
};

export default Product;
