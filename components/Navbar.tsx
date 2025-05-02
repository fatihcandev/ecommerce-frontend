'use client';

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import BrandName from './BrandName';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'next/navigation';

const links = [
  {
    label: 'On sale',
    href: '/on-sale',
  },
  {
    label: 'New arrivals',
    href: '/new-arrivals',
  },
  {
    label: 'Brands',
    href: '/brands',
  },
];

export default function Navbar() {
  const cartItems = useCartStore((store) => store.items);
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-10 border-b bg-white p-4">
      <div className="container mx-auto flex items-center gap-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
          <BrandName />
        </div>
        <div className="hidden items-center gap-4 text-xs text-gray-600 hover:text-gray-800 md:flex">
          <span>Shop</span>
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="relative hidden max-w-[400px] items-center rounded-full bg-gray-200 py-2 pl-3 transition-all focus-within:flex-1 md:flex">
          <SearchIcon className="absolute top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            className="ml-6 border-none text-xs text-gray-400 placeholder:text-gray-400 focus:outline-none"
            placeholder="Search for products..."
          />
        </div>
        <div className="ml-auto flex items-center">
          <Button className="md:hidden" size="icon" variant="ghost">
            <SearchIcon />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => router.push('/cart')}
            className="relative"
          >
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 size-4 rounded-full bg-black text-xs text-white">
                {cartItems.length}
              </span>
            )}
            <ShoppingCartIcon className="size-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <UserCircleIcon className="size-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
