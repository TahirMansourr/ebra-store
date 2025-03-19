export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating : {
        rating : number ,
        count : number
    }
}

export type CartDTO =  {
    id: number;
    userId: number;
    products: { productId: number; quantity: number }[];
  };