import Browse from '@/components/Browse';
import Customers from '@/components/Customers';
import FeaturedBrands from '@/components/FeaturedBrands';
import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/Hero';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';

export default async function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <Hero />
        <FeaturedBrands />
      </div>
      <FeaturedProducts title="new arrivals" products={products.slice(0, 4)} />
      <Separator />
      <FeaturedProducts title="top selling" products={products.slice(4)} />
      <Browse />
      <Customers />
    </div>
  );
}
