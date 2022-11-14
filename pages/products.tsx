import {InferGetStaticPropsType} from "next";
import {ProductListItem} from "../components/Product";
import {apolloClient} from "../graphql/apolloClient";
import {gql} from "@apollo/client";

const ProductsPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
            {data.products.map(product => (
                <li className="border-2 shadow-xl" key={product.id}>
                    <ProductListItem
                        data={{
                            id: product.slug,
                            title: product.name,
                            thumbnailUrl: product.images[0].url,
                            thumbnailAlt: product.name
                        }}
                    />
                </li>)
            )}
        </ul>
    )
}

export default ProductsPage;

const GET_ALL_PRODUCTS_QUERY = gql`
  query GetAllProducts {
    products {
        id
        name
        slug
        images(first: 1) {
            url
        }
    }
   }
 `;

export const getStaticProps = async () => {
    const { data } = await apolloClient
        .query<GetAllProductsQueryResponse>({
            query: GET_ALL_PRODUCTS_QUERY,
        });
    return {
        props: {
            data,
        }
    }
}

interface GetAllProductsQueryResponse {
    products: Product[]
}

interface Product {
    id: string,
    slug: string;
    name: string;
    images: ProductImage[]
}

interface ProductImage {
    url: string;
}