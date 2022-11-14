import Link from "next/link";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {serialize} from 'next-mdx-remote/serialize'
import {InferGetStaticPathsType} from "../../types/infer-get-static-paths";
import {ProductDetails} from "../../components/Product";
import {AppRoutes} from "../../types/app-routes";
import {gql} from "@apollo/client";
import {apolloClient} from "../../graphql/apolloClient";

const ProductDetailsPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {

    if (!data) {
        return <p>Something went wrong!</p>
    }

    return (
        <>
            <Link href={AppRoutes.PRODUCTS}>
                <a>Go back to products page</a>
            </Link>
            <ProductDetails
                data={{
                    id: data.slug,
                    title: data.name,
                    thumbnailUrl: data.images[0].url,
                    thumbnailAlt: data.name,
                    description: data.description,
                    longDescription: data.longDescription,
                    rating: 5
                }}
            />
        </>
    )
}

export default ProductDetailsPage;

const GET_PRODUCTS_SLUGS_QUERY = gql`
  query GetAllProducts {
    products {
        slug
    }
   }
 `;

interface GetPorductsSlugsResponse {
    products: {
        slug: string;
    }[]
}

export const getStaticPaths = async () => {

    const {data} = await apolloClient
        .query<GetPorductsSlugsResponse>({
            query: GET_PRODUCTS_SLUGS_QUERY,
        });

    return {
        paths: data.products.map(product => ({
            params: {
                productId: product.slug
            }
        })),
        fallback: false,
    }
}

const GET_PRODUCT_DETAILS_BY_SLUG_QUERY = gql`
  query GetProductDetailsBySlug($slug: String) {
    product(where: {slug: $slug}) {
        id
        slug
        name
        description
        images {
            url
         }
        price
    }
    }
`;

interface GetProductDetailsBySlugQueryResponse {
    product: Product
}

interface Product {
    id: string,
    slug: string;
    name: string;
    description: string;
    images: ProductImage[],
    price: number;
}

interface ProductImage {
    url: string;
}

export const getStaticProps = async (
    {params}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>
) => {

    if (!params?.productId) {
        return {
            notFound: true,
            props: {}
        }
    }

    const {data} = await apolloClient
        .query<GetProductDetailsBySlugQueryResponse>({
            variables: {
              slug: params.productId
            },
            query: GET_PRODUCT_DETAILS_BY_SLUG_QUERY,
        });

    if (!data) {
        return {
            notFound: true,
            props: {}
        }
    }

    return {
        props: {
            data: {
                ...data.product,
                longDescription: await serialize(data.product.description)
            }
        }
    }
}

