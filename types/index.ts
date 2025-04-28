export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Comment {
  id: number;
  customerName: string;
  commentText: string;
}

export interface CartItem extends Product {
  quantity: number;
}
