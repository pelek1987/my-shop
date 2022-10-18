import {ProductDetails} from "../components/Product";
import {useQuery} from "react-query";
import {StoreApiResponse} from "../types/api";

const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data: StoreApiResponse[] = await res.json();

    return data;
}

const ProductsCSRPage = () => {
    const {data, isLoading, isError} = useQuery('products', getProducts);

    if(isLoading) {
        return <div>Loading ...</div>
    }

    if(isError || !data) {
        return <div>Something went wrong!</div>
    }

    return (
        <ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
            {data.map(product => <li className="border-2 shadow-xl" key={product.id}><ProductDetails data={{ id: product.id, title: product.title, description: product.description, thumbnailUrl: product.image, thumbnailAlt: product.title, rating: product.rating.rate}}/></li>)}
        </ul>
    )
}

export default ProductsCSRPage;
