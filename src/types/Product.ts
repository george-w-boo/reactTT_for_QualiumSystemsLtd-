export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  inCart: boolean;
}

export interface NewProduct {
  title: string;
  price: number;
  description: string;
}

export interface CartProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface NewCartProduct {
  title: string;
  description: string;
  price: number;
  quantity: number;
}
