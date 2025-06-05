import { ButtonHTMLAttributes, useRef } from 'react';
import { clsx } from 'clsx';
import styles from './button.module.css'
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'secondary' | 'primary' | 'dashed' | 'text' | 'link' | 'ghost' | 'outline';
  htmlType?: 'button' | 'submit' | 'reset';
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'black';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingIcon?: React.ReactNode;
  loadingText?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}


const baseStyles =
  `rounded-xl font-sans font-medium text-center cursor-pointer 
   active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed`;

const sizeStyles: Record<string, string> = {
  sm: 'py-2 px-4 text-sm min-h-[40px] min-w-[40px]',
  md: 'py-2.5 px-5 text-base min-h-[48px] min-w-[120px]',
  lg: 'py-3 px-6 text-lg min-h-[48px] min-w-[200px]',
};

const typeStyles: Record<string, string> = {
  primary: styles.gradientButton,
  secondary: 'border text-fore-text',
  dashed: 'bg-transparent border border-dashed border-muted text-fore-text hover:border-fore-text',
  text: 'bg-transparent text-fore-text hover:bg-muted',
  link: 'bg-transparent text-blue-500 underline hover:text-blue-500 p-0',
  outline: 'bg-transparent border border-muted text-fore-text hover:bg-muted',
  ghost: 'bg-transparent font-medium text-sm leading-[1.125rem] transition-colors duration-200 will-change-transform border border-transparent hover:bg-muted active:border-current',
};

const colorStyles: Record<
  NonNullable<ButtonProps['type']>,
  Record<NonNullable<ButtonProps['color']>, string>
> = {

  primary: {
    primary: styles.gradientButton,
    default: 'bg-default text-white hover:bg-default-hover',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    black: 'bg-black text-white hover:bg-black-hover',
  },
  secondary: {
    primary: 'bg-gray-100 text-fore-text hover:bg-gray-200',
    default: 'bg-default-bg text-default hover:bg-default',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    black: 'bg-black text-white hover:bg-black-hover',
  },
  outline: {
    primary: 'border border-gray-300 text-fore-text hover:bg-gray-50',
    default: 'border border-default-border text-default hover:bg-default-bg',
    secondary: 'border border-purple-500 text-purple-500 hover:bg-purple-50',
    danger: 'border border-red-500 text-red-500 hover:bg-red-50',
    success: 'border border-green-500 text-green-500 hover:bg-green-50',
    black: 'border border-black text-black hover:bg-black/5',
  },
  ghost: {
    primary: 'border border-transparent text-fore-text hover:bg-muted active:border-fore-text',
    default: 'border border-transparent text-default hover:bg-default-bg active:border-default',
    secondary: 'border border-transparent text-purple-500 hover:bg-purple-50 active:border-purple-500',
    danger: 'border border-transparent text-red-500 hover:bg-red-50 active:border-red-500',
    success: 'border border-transparent text-green-500 hover:bg-green-50 active:border-green-500',
    black: 'border border-transparent text-black hover:bg-black/10 active:border-black',
  },
  dashed: {
    primary: 'border border-dashed border-gray-300 text-gray-800 hover:border-gray-500',
    default: 'border border-dashed border-default-border text-default hover:bg-default-bg',
    secondary: 'border border-dashed border-purple-500 text-purple-500 hover:bg-purple-50',
    danger: 'border border-dashed border-red-500 text-red-500 hover:bg-red-50',
    success: 'border border-dashed border-green-500 text-green-500 hover:bg-green-50',
    black: 'border border-dashed border-black text-black hover:border-gray-800',
  },
  text: {
    primary: 'bg-transparent text-fore-text hover:bg-muted',
    default: 'bg-transparent text-default hover:bg-default-bg',
    secondary: 'bg-transparent text-purple-500 hover:bg-purple-100',
    danger: 'bg-transparent text-red-500 hover:bg-red-100',
    success: 'bg-transparent text-green-500 hover:bg-green-100',
    black: 'bg-transparent text-black hover:bg-black/10',
  },
  link: {
    primary: 'bg-transparent text-blue-500 underline hover:text-blue-700 p-0',
    default: 'bg-transparent text-default underline hover:text-default-hover p-0',
    secondary: 'bg-transparent text-purple-500 underline hover:text-purple-700 p-0',
    danger: 'bg-transparent text-red-500 underline hover:text-red-700 p-0',
    success: 'bg-transparent text-green-500 underline hover:text-green-700 p-0',
    black: 'bg-transparent text-black underline hover:text-black-hover p-0',
  },
};


export default function Button({
  type = 'primary',
  htmlType = 'button',
  size = 'md',
  className = '',
  color = 'default',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'start',
  loadingIcon,
  loadingText,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const isIconOnly = !children && icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || type !== 'primary') return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const buttonClasses = clsx(
    baseStyles,
    color !== 'default' ? colorStyles[type]?.[color] : typeStyles[type],
    loading && 'opacity-70 cursor-wait',
    isIconOnly ? 'rounded-full p-0' : 'rounded-xl',
    isIconOnly
      ? {
        sm: 'h-10 w-10 min-w-0',
        md: 'h-12 w-12 min-w-0',
        lg: 'h-14 w-14 min-w-0',
      }[size]
      : sizeStyles[size],
    className,
  );

  const renderContent = () => {
    if (loading) {
      const spinner = loadingIcon || (
        <svg
          data-testid="loading-spinner"
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
            5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 
            5.824 3 7.938l3-2.647z"
          />
        </svg>
      );

      return (
        <span className="inline-flex items-center justify-center gap-2">
          {iconPosition === 'start' && spinner}
          {loadingText ?? children}
          {iconPosition === 'end' && spinner}
        </span>
      );
    }

    if (!icon) return children;

    if (isIconOnly) {
      return <span className="inline-flex items-center justify-center">{icon}</span>;
    }

    return (
      <span className="inline-flex items-center justify-center gap-2">
        {iconPosition === 'start' ? (
          <>
            {icon}
            {children}
          </>
        ) : (
          <>
            {children}
            {icon}
          </>
        )}
      </span>
    );
  };

  return (
    <button
      ref={ref}
      type={htmlType}
      disabled={disabled || loading}
      onMouseMove={type === 'primary' ? handleMouseMove : undefined}
      className={buttonClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
