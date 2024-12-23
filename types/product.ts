export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  category: string;
  operationType: string[];
  specifications: {
    brand: string;
    model: string;
    year: number;
    hours: number;
    location: string;
  };
}
