import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "../components/Product";
import {StoreApiResponse} from "../types/api";

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
            {data.map(product => (
                <li className="border-2 shadow-xl" key={product.id}>
                    <ProductListItem
                        data={{
                            id: product.id,
                            title: product.title,
                            thumbnailUrl: product.image,
                            thumbnailAlt: product.title
                        }}
                    />
                </li>)
            )}
        </ul>
    )
}

// <ProductDetails data={{ title: product.title, description: product.description, thumbnailUrl: product.image, thumbnailAlt: product.title, rating: product.rating.rate}}/>

export default ProductsPage;

export const getStaticProps = async () => {
    const res = await fetch('https://naszsklep-api.vercel.app/api/products');
    const data: StoreApiResponse[] = await res.json();
    return {
        props: {
            data,
        }
    }
}
