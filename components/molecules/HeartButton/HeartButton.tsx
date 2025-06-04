'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '@/hooks/useFavorite';
import { SafeUser } from '@/types';
import clsx from 'clsx';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      data-testid="heart-button"
      className="relative cursor-pointer transition hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        data-testid="outline-heart"
        className="absolute -top-[2px] -right-[2px] text-white"
      />
      <AiFillHeart
        size={24}
        data-testid="fill-heart"
        className={clsx('transition', hasFavorited ? 'text-rose-500' : 'text-neutral-500')}
      />
    </div>
  );
};

export default HeartButton;
