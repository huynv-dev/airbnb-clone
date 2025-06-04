'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
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
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute top-5 left-2 text-neutral-700"
          data-testid="price-icon"
        />
      )}
      <input
        id={id}
        type={type}
        autoComplete="off"
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={clsx(
          'peer w-full rounded-md border bg-white p-4 pt-6 font-light transition outline-none disabled:cursor-not-allowed disabled:opacity-70',
          formatPrice ? 'pl-9' : 'pl-4',
          errors[id]
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black',
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'text-md absolute top-5 z-10 origin-[0] -translate-y-3 scale-75 transform duration-150',
          formatPrice ? 'left-9' : 'left-4',
          'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75',
          errors[id] ? 'text-rose-500' : 'text-zinc-400',
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
