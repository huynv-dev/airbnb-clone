'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from './HeartButton.module.css';
import useFavorite from "@/hooks/useFavorite";
import { SafeUser } from "@/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser
  });

  return (
    <div
      onClick={toggleFavorite}
      className={styles.container}
      data-testid="heart-button"
    >
      <AiOutlineHeart
        size={28}
        className={styles.outlineHeart}
        data-testid="outline-heart"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? styles.fillHeartActive : styles.fillHeart}
        data-testid="fill-heart"
      />
    </div>
  );
};

export default HeartButton; 