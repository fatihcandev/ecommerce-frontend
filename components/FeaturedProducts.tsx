'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import { Button } from './ui/button';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
}

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  return (
    <div className="flex flex-col">
      <span className="container mx-auto mb-6 text-center text-5xl font-extrabold uppercase">
        {title}
      </span>
      <div className="md:hidden">
        <Swiper slidesPerView={1.25}>
          {products.map((product) => (
            <SwiperSlide key={product.id} className="px-4">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="container mx-auto hidden gap-4 px-4 md:grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Button variant="outline" className="mx-auto mt-6 min-w-[150px]">
        View all
      </Button>
    </div>
  );
};

export default FeaturedProducts;
