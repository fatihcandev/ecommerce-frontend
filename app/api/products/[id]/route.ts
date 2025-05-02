import { NextRequest, NextResponse } from 'next/server';
import { Product } from '../../../../types';
import { products } from '@/data/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<Product | { message: string }>> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 });
  }
  return NextResponse.json(product as Product);
}
