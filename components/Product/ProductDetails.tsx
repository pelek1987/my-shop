import Image from "next/image";
import {Rating} from "../Rating";
import {Product} from './Product.types'
import {NextSeo} from "next-seo";
import {CustomMarkdownComponent} from "../CustomMarkdownComponent";

export interface ProductDetailsProps {
    data: Product
}

const ProductDetails = ({data}: ProductDetailsProps) => {
    return (
        <>
            <div className="bg-white p-4">
                <NextSeo
                    title={data.title}
                    description={data.description}
                    canonical={`https://my-shop.vercel.app/products/${data.id}`}
                    openGraph={{
                        url: `https://my-shop.vercel.app/products/${data.id}`,
                        title: data.title,
                        description: data.description,
                        images: [
                            {
                                url: data.thumbnailUrl,
                                alt: data.thumbnailAlt,
                                type: 'image/jpeg'
                            }
                        ],
                        siteName: 'My Shop'
                    }}
                />
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
            <p className="p-4">
                <CustomMarkdownComponent>
                    {data.longDescription}
                </CustomMarkdownComponent>
            </p>
            <Rating rating={data.rating}/>
        </>
    );
};

export default ProductDetails;
