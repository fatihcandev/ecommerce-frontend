import { NextResponse } from 'next/server';
import { Product } from '../../../../types';
import { products } from '@/data/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse<Product | { message: string }>> {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) {
    return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 });
  }
  return NextResponse.json(product as Product);
}
