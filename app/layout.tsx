import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import Modal from '@/components/modals/Modal';
import ModalsProvider from '@/providers/ModalsProvider';
import ToasterProvider from '@/providers/ToasterProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const nunito = Nunito({
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ToasterProvider />
        <ModalsProvider />
        <ClientOnly>
          {/* <Modal
            isOpen
            title="Hello"
            body={<div>Hello</div>}
          /> */}
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
