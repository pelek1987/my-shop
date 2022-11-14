import {MarkdownResult} from "../../types/utils";

export interface Product {
    id: string;
    title: string;
    description: string;
    longDescription: MarkdownResult
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}

export type ProductTitleAndImage = Pick<Product, 'id' | 'title'  | 'thumbnailUrl' | 'thumbnailAlt'>

