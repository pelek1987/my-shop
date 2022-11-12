import Link from "next/link";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import { serialize } from 'next-mdx-remote/serialize'
import {StoreApiResponse} from "../../types/api";
import {InferGetStaticPathsType} from "../../types/infer-get-static-paths";
import {ProductDetails} from "../../components/Product";
import {AppRoutes} from "../../types/app-routes";

const ProductDetailsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

    if(!data) {
        return <p>Something went wrong!</p>
    }

    return (
        <>
            <Link href={AppRoutes.PRODUCTS}>
                <a>Go back to products page</a>
            </Link>
            <ProductDetails
                data={{
                    id: data.id,
                    title: data.title,
                    thumbnailUrl: data.image,
                    thumbnailAlt: data.title,
                    description: data.description,
                    longDescription: data.longDescription,
                    rating: data.rating.rate
                }}
            />
        </>
    )
}

export default ProductDetailsPage;

export const getStaticPaths = async () => {

    const res = await fetch('https://naszsklep-api.vercel.app/api/products');
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map(product => ({
            params: {
                productId: product.id.toString()
            }
        })),
        fallback: false,
    }
}

export const getStaticProps = async (
    { params }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>
) => {

    if(!params?.productId) {
        return {
            notFound: true,
            props: {}
        }
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.productId}`);
    const data: StoreApiResponse | null = await res.json();

    if(!data) {
        return {
            notFound: true,
            props: {}
        }
    }

    return {
        props: {
            data: {
                ...data,
                longDescription: await serialize(data.longDescription)
            }
        }
    }
}

