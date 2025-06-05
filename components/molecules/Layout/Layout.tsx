import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { Sidebar } from './Sidebar';

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return <section className={clsx('flex flex-col w-full', className)}>{children}</section>;
}


Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sidebar = Sidebar;

export default Layout;
