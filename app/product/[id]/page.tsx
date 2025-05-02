'use client';

import ProductImageSwitcher from '@/components/ProductImageSwitcher';
import QuantitySelector from '@/components/QuantitySelector';
import SizeSelector from '@/components/SizeSelector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { ClothingSize, Product } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`/api/products/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Ürün bulunamadı');
  return res.json();
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ClothingSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSizeError, setShowSizeError] = useState(false);
  const addToCart = useCartStore((store) => store.addItem);
  const getIsItemInCart = useCartStore((store) => store.getIsItemInCart);

  useEffect(() => {
    if (id) {
      fetchProduct(id).then(setProduct);
    }
  }, [id]);

  if (!product) return 'Loading the product...';

  const { name, description, images, price } = product;

  const handleAddToCart = () => {
    if (!selectedSize) {
      return setShowSizeError(true);
    }
    addToCart({
      ...product,
      quantity,
      size: selectedSize,
    });
  };

  const isItemInCart = getIsItemInCart(parseInt(id));

  return (
    <div className="container mx-auto flex flex-col gap-10 px-4">
      <div className="mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-[1.5fr_1fr] 2xl:grid-cols-2">
        <ProductImageSwitcher images={images} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-extrabold uppercase">{name}</span>
            <span className="text-2xl font-medium">${price}</span>
            <p>{description}</p>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col gap-4">
            <SizeSelector
              selectedSize={selectedSize}
              onSizeChange={(value) => {
                if (showSizeError) {
                  setShowSizeError(false);
                }

                setSelectedSize(value);
              }}
              disabled={isItemInCart}
            />
            {showSizeError && (
              <span className="text-destructive">Please select a size!</span>
            )}
          </div>
          <Separator className="my-2" />
          <div className="flex gap-2">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              disabled={isItemInCart}
            />
            <Button
              className={cn(
                'flex-1 md:max-w-[200px]',
                'lg:max-w-[unset] lg:flex-1 xl:max-w-[200px]',
                isItemInCart && 'bg-green-600',
              )}
              onClick={handleAddToCart}
              disabled={isItemInCart}
            >
              {isItemInCart ? 'Added to cart' : 'Add to cart'}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 border-b">
          <span className="border-b border-black pb-4 text-center font-semibold">
            Product details
          </span>
          <span className="pb-4 text-center text-gray-600">
            Rating & reviews
          </span>
          <span className="pb-4 text-center text-gray-600">
            Payment options
          </span>
        </div>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
