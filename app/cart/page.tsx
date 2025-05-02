'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { sizeDisplayNames } from '@/lib/utils';
import { useCartStore } from '@/store/useCartStore';
import { ArrowRightIcon, TagIcon, TrashIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const DELIVERY_FEE = 15;

export default function Cart() {
  const items = useCartStore((store) => store.items);
  const getTotal = useCartStore((store) => store.getTotal);
  return (
    <div className="container mx-auto flex flex-col gap-4 px-4">
      <h1 className="mt-10 text-4xl font-extrabold">YOUR CART</h1>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1.5fr_1fr]">
        <div className="flex h-fit flex-col rounded-xl border px-4">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <Link href={`/product/${item.id}`}>
                <div className="relative flex gap-4 py-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive absolute top-2 right-0"
                  >
                    <TrashIcon className="size-4" />
                  </Button>
                  <div className="relative size-[100px] overflow-hidden rounded-lg md:size-[150px]">
                    <Image src={item.images?.[0]} alt={item.imageAlt} fill />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold max-md:max-w-[150px]">
                      {item.name}
                    </span>
                    <span className="text-xs">
                      Size:{' '}
                      <span className="text-gray-500">
                        {sizeDisplayNames[item.size]}
                      </span>
                    </span>
                    <span className="text-lg font-semibold">${item.price}</span>
                  </div>
                </div>
              </Link>
              {index + 1 !== items.length && <Separator />}
            </Fragment>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-xl border p-4">
          <h6 className="text-lg font-semibold">Order summary</h6>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Delivery fee</span>
            <span className="font-semibold">${DELIVERY_FEE}</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-500">Total</span>
            <span className="text-lg font-semibold">
              ${(DELIVERY_FEE + getTotal()).toFixed(2)}
            </span>
          </div>
          <div className="flex gap-2 md:self-end lg:self-stretch">
            <div className="flex flex-1 items-center gap-2 rounded-md bg-gray-200 px-4 text-gray-400">
              <TagIcon className="size-4" />
              <span className="text-sm">Add promo code</span>
            </div>
            <Button>Apply</Button>
          </div>
          <Button className="md:self-end lg:mt-auto lg:self-stretch">
            Checkout
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
