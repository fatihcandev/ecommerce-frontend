import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, image, imageAlt, name, price } = product;
  const cartItems = useCartStore((store) => store.items);
  const addItemToCart = useCartStore((store) => store.addItem);
  const isItemAddedToCard = cartItems.find(
    (cartItem) => cartItem.id === product.id,
  );
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/product/${id}`}>
        <div className={cn('flex flex-col', className)}>
          <div className="relative mb-3 h-[300px] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image src={image} alt={imageAlt} fill className="object-contain" />
          </div>
          <span className="text-lg font-bold">{name}</span>
          <span className="text-2xl font-medium">${price}</span>
        </div>
      </Link>
      <Button
        onClick={() => {
          addItemToCart(product);
        }}
        className={cn('transition-all', isItemAddedToCard && 'bg-green-600')}
      >
        {isItemAddedToCard ? 'Added to cart' : 'Add to cart'}
      </Button>
    </div>
  );
};

export default ProductCard;
