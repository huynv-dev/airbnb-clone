import { LayoutProps } from "./Layout";
import { twMerge } from "tailwind-merge";

export function Footer({ children, className = '' }: LayoutProps) {
  return <footer className={twMerge('h-12 px-4 bg-gray-100 flex items-center', className)}>{children}</footer>;
}
