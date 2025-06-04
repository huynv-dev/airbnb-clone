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
        'cursor-pointer px-4 py-3 text-sm transition hover:bg-neutral-100',
        disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent',
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
