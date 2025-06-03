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
        'w-full flex items-center justify-center gap-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed',
        outline
          ? 'bg-white border border-neutral-300 text-black hover:bg-neutral-100'
          : 'bg-rose-500 border border-rose-500 text-white hover:bg-rose-600',
        small
          ? 'py-1 px-3 text-sm font-light'
          : 'py-3 px-6 text-base font-semibold'
      )}
    >
      {Icon && <Icon size={small ? 18 : 24} className="shrink-0" />}
      {label}
    </button>
  );
};

export default Button;
