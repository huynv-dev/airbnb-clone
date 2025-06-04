'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { UserMenu } from '../index';
import { SafeUser } from '@/types';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div onClick={handleLogoClick} className="cursor-pointer text-2xl font-bold text-rose-500">
          AirbnbClone
        </div>
        <UserMenu currentUser={currentUser} />
      </div>
    </header>
  );
};

export default Navbar;
