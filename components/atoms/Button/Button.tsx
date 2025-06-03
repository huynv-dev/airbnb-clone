'use client';

import { IconType } from 'react-icons';
import styles from './Button.module.css';
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
        styles.button,
        outline ? styles.outline : styles.filled,
        small ? styles.small : styles.regular
      )}
    >
      {Icon && (
        <Icon
          size={24}
          className={styles.icon}
        />
      )}
      {label}
    </button>
  );
};

export default Button; 