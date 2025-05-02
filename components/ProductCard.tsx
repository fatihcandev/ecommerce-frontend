import React from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, images, imageAlt, name, price } = product;

  return (
    <div className="flex flex-col gap-2">
      <Link href={`/product/${id}`}>
        <div className={cn('flex flex-col', className)}>
          <div className="relative mb-3 h-[300px] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={images[0]}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold">{name}</span>
          <span className="text-2xl font-medium">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
