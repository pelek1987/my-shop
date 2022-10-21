import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {ProductDetails} from "../components/Product";
import {StoreApiResponse} from "../types/api";

const PAGES_COUNT = 10;
const ITEMS_PER_PAGE = 25;

const getProductsForPage = async (page = 0) => {
    const skippedPages = page === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE;
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${ITEMS_PER_PAGE}&offset=${skippedPages}`);
    const data: StoreApiResponse[] = await res.json();

    return data;
}

const ProductsCSRPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const {data, isLoading, isError} = useQuery(['products', currentPage], () => getProductsForPage(currentPage));


    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (isError || !data) {
        return <div>Something went wrong!</div>
    }

    return (
        <>
            <ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
                {data.map(product => <li className="border-2 shadow-xl" key={product.id}><ProductDetails data={{
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                    rating: product.rating.rate
                }}/></li>)}
            </ul>
            <div className="flex flex-row justify-center mt-4">
                <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
                    <div className="hidden md:-mt-px md:flex">
                        {[...new Array(PAGES_COUNT)].map((item, idx) => {
                            const pageId = idx + 1;
                            return (
                                <a key={`page-${pageId}`}
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                   onClick={() => setCurrentPage(pageId)}
                                >
                                    {pageId}
                                </a>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default ProductsCSRPage;
