'use client';

import { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Up</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
