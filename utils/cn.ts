import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Gộp class bằng Tailwind ưu tiên
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
