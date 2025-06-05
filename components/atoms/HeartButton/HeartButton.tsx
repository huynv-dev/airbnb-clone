import { Heart } from '@/components/icons/custom';
import { ButtonHTMLAttributes } from 'react';

interface HeartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLiked: boolean;
  size?: number;
}

export const HeartButton = ({ 
  isLiked, 
  size = 20, 
  className = '',
  ...props 
}: HeartButtonProps) => {
  return (
    <button 
      className={`p-1.5 rounded-full bg-white/90 hover:bg-white transition-colors ${className}`}
      {...props}
    >
      <Heart 
        size={size}
        className={`transition-colors ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-gray-600'}`}
      />
    </button>
  );
}; 