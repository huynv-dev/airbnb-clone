'use client';

import { SafeUser } from '@/types';
import Navbar from '@/components/organisms/Navbar';
import { ModalsProvider, ToasterProvider } from '@/components/providers';

interface MainLayoutProps {
  children: React.ReactNode;
  currentUser?: SafeUser | null;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentUser }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <ToasterProvider />
      <ModalsProvider />
      <Navbar currentUser={currentUser} />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default MainLayout;
