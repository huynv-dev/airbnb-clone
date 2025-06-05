import clsx from "clsx";
import { LayoutProps } from "./Layout";
import { twMerge } from "tailwind-merge";

export function Header({ children, className = '' }: LayoutProps) {
  return <header className={twMerge('h-16 px-4 bg-gray-200 flex items-center', className)}>{children}</header>;
}