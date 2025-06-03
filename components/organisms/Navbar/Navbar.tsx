'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { UserMenu } from '../index';

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <header className="w-full shadow-sm border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div
          onClick={handleLogoClick}
          className="text-2xl font-bold text-rose-500 cursor-pointer"
        >
          AirbnbClone
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
