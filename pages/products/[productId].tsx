import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {ProductDetails} from "../../components/Product";
import {InferGetStaticPaths} from "../../types/infer-get-static-paths";
import Link from "next/link";
import {StoreApiResponse} from "../../types/api";

const ProductDetailsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

    if(!data) {
        return <p>Something went wrong!</p>
    }

    return (
        <>
            <Link href={'/products'}>
                <a>Go back to products page</a>
            </Link>
            <ProductDetails
                data={{
                    id: data.id,
                    title: data.title,
                    thumbnailUrl: data.image,
                    thumbnailAlt: data.title,
                    description: data.description,
                    rating: data.rating.rate
                }}
            />
        </>
    )
}

export default ProductDetailsPage;

export const getStaticPaths = async () => {

    const res = await fetch('https://fakestoreapi.com/products');
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

export const getStaticProps = async ({ params }: GetStaticPropsContext<
    InferGetStaticPaths<typeof getStaticPaths>
    >) => {

    if(!params?.productId) {
        return {
            notFound: true,
            props: {}
        }
    }

    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
    const data: StoreApiResponse | null = await res.json();
    return {
        props: {
            data,
        }
    }
}

