import { ProductTitleAndImage } from './Product.types'
import Link from "next/link";
import Image from "next/image";

interface ProductListItemProps {
    data: ProductTitleAndImage
}

const ProductListItem = ({ data}: ProductListItemProps) => {
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
            <Link href={`/products/${data.id}`}>
                <a>
                    <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
                </a>
            </Link>
        </>
    );
}

export default ProductListItem