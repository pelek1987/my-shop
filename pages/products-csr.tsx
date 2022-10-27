import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {ProductDetails} from "../components/Product";
import {StoreApiResponse} from "../types/api";
import {PaginationItem} from "../components/PaginationItem";

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
                    longDescription: product.longDescription,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                    rating: product.rating.rate
                }}/></li>)}
            </ul>
            <div className="flex flex-row justify-center mt-4">
                <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
                    <div className="hidden md:-mt-px md:flex">
                        {[...Array(PAGES_COUNT)].map((item, idx) => {
                            const pageId = idx + 1;
                            return <PaginationItem key={`page-${pageId}`} pageId={pageId} onPageChange={() => setCurrentPage(pageId)} />
                        })}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default ProductsCSRPage;
