import Link from "next/link";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {serialize} from 'next-mdx-remote/serialize'
import {InferGetStaticPathsType} from "../../types/infer-get-static-paths";
import {ProductDetails} from "../../components/Product";
import {AppRoutes} from "../../types/app-routes";
import {apolloClient} from "../../graphql/apolloClient";
import {
    GetProductDetailsBySlugDocument,
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables,
    GetProductsSlugsDocument,
    GetProductsSlugsQuery,
} from "../../graphql/generated/graphql";

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

export const getStaticPaths = async () => {

    const {data} = await apolloClient
        .query<GetProductsSlugsQuery>({
            query: GetProductsSlugsDocument,
        });
    if(!data.products) {

    }

    return {
        paths: data.products.map(product => ({
            params: {
                productId: product.slug
            }
        })),
        fallback: false,
    }
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
        .query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
            variables: {
              slug: params.productId
            },
            query: GetProductDetailsBySlugDocument,
        });

    if (!data.product) {
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

