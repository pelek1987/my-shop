import { ProductTitleAndImage } from './Product.types'
import Link from "next/link";

interface ProductListItemProps {
    data: ProductTitleAndImage
}

const ProductListItem = ({ data}: ProductListItemProps) => {
    return (
        <>
            <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
            <Link href={`/products/${data.id}`}>
                <a>
                    <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
                </a>
            </Link>
        </>
    );
}

export default ProductListItem