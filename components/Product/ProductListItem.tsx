import { ProductTitleAndImage } from './Product.types'
import Link from "next/link";
import Image from "next/image";
import {AppRoutes} from "../../types/app-routes";
import {useCartContext} from "../Cart/CartContext";

interface ProductListItemProps {
    data: ProductTitleAndImage
}

const ProductListItem = ({ data}: ProductListItemProps) => {

    const cartContext = useCartContext();

    return (
        <>
            <div className="bg-white p-4">
                <Image
                    src={data.thumbnailUrl}
                    alt={data.thumbnailAlt}
                    layout="responsive"
                    width={16}
                    height={9}
                    objectFit={'contain'}
                />
            </div>
            <div className="p-4">
                <Link href={`${AppRoutes.PRODUCTS}/${data.id}`}>
                    <a>
                        <h2 className="pb-4 text-2xl font-bold">{data.title}</h2>
                    </a>
                </Link>
                <button
                    className="text-white bg-gradient-to-r from-purple-800 to-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => cartContext.addItemToCart({
                        id: data.id,
                        title: data.title,
                        price: 26.5,
                        count: 1,
                    })}
                >
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductListItem