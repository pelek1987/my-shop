import {PaginationItemProps} from "./PaginationItem.types";

const PaginationItem = ({pageId, onPageChange}: PaginationItemProps) => (
    <a key={`page-${pageId}`}
       className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
       onClick={onPageChange}
    >
        {pageId}
    </a>);


export default PaginationItem;