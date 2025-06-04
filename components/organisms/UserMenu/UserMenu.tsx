'use client';

import { useState } from 'react';

interface UserMenuProps {
  currentUser?: any;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border bg-white px-4 py-2 shadow-sm transition hover:shadow-md"
      >
        {currentUser ? currentUser.name : 'Menu'}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-md border bg-white shadow-lg">
          <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">Login</div>
          <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">Sign Up</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
