export interface StoreApiResponse {
    id: number;
    title: string;
    price: number;
    description: string;
    longDescription: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}