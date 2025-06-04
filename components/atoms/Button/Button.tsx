'use client';

import { IconType } from 'react-icons';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex w-full items-center justify-center gap-2 rounded-md transition disabled:cursor-not-allowed disabled:opacity-70',
        outline
          ? 'border border-neutral-300 bg-white text-black hover:bg-neutral-100'
          : 'border border-rose-500 bg-rose-500 text-white hover:bg-rose-600',
        small ? 'px-3 py-1 text-sm font-light' : 'px-6 py-3 text-base font-semibold',
      )}
    >
      {Icon && <Icon size={small ? 18 : 24} className="shrink-0" />}
      {label}
    </button>
  );
};

export default Button;
