import { Product } from '@/types';

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Ürün bulunamadı');
  return res.json();
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return <div>Product detail: {product.name}</div>;
}
