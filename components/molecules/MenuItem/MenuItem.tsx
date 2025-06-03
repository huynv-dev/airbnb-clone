 'use client';

import React from 'react';
import clsx from 'clsx';

interface MenuItemProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={clsx(
        'px-4 py-3 text-sm transition hover:bg-neutral-100 cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent'
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
