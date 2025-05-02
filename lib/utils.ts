import { ClothingSize } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sizeDisplayNames: Record<ClothingSize, string> = {
  [ClothingSize.S]: 'Small',
  [ClothingSize.M]: 'Medium',
  [ClothingSize.L]: 'Large',
  [ClothingSize.XL]: 'X-Large',
};
