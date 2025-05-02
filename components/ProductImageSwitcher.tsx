'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ProductImageSwitcherProps {
  images: string[];
}

const ProductImageSwitcher = ({ images }: ProductImageSwitcherProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="relative order-1 h-[400px] w-full overflow-hidden rounded-2xl md:order-2 md:h-[unset] md:min-h-full md:flex-1">
        <Image src={selectedImage} alt="" fill className="object-cover" />
      </div>
      <div className="order-2 grid grid-cols-3 gap-2 md:order-1 md:grid-cols-1 md:grid-rows-3">
        {images.map((image, index) => (
          <Button
            key={index}
            variant="ghost"
            className={cn(
              'relative h-[100px] w-full overflow-hidden rounded-2xl p-0 md:h-[150px] md:w-[150px]',
              selectedImage === image && 'border-2 border-black',
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSwitcher;
