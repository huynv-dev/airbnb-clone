'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
import styles from './Input.module.css';
import clsx from 'clsx';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className={styles.container}>
      {formatPrice && (
        <BiDollar
          size={24}
          className={styles.priceIcon}
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={clsx(
          styles.input,
          formatPrice && styles.inputWithPrice,
          errors[id] && styles.inputError
        )}
      />
      <label
        className={clsx(
          styles.label,
          formatPrice && styles.labelWithPrice,
          errors[id] && styles.labelError
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Input; 