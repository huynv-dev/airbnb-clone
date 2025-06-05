import { LayoutProps } from "./Layout";
import { twMerge } from "tailwind-merge";

export function Content({ children, className = '' }: LayoutProps) {
  return <main className={twMerge('flex-1 px-4 py-6 bg-white', className)}>{children}</main>;
}