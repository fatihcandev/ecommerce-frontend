export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  imageAlt: string;
}

export interface Comment {
  id: number;
  customerName: string;
  commentText: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: ClothingSize;
}

export enum ClothingSize {
  S = 'SMALL',
  M = 'MEDIUM',
  L = 'LARGE',
  XL = 'X-LARGE',
}
