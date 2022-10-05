import { Rating } from "..//Rating";
import { ProductProps } from "./Product.types";

const Product = ({ data }: ProductProps) => {
  return (
    <>
      <section>
        <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
        <Rating rating={data.rating} />
      </section>
      <p>{data.description}</p>
    </>
  );
};

export default Product;
