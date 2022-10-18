export interface Product {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}

export type ProductTitleAndImage = Pick<Product, 'id' | 'title'  | 'thumbnailUrl' | 'thumbnailAlt'>

