'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

import { SafeListing, SafeReservation, SafeUser } from "@/types";
import HeartButton from "../HeartButton";
import { Button } from "@/components/atoms";
import styles from './ListingCard.module.css';
import clsx from "clsx";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className={styles.container}
      data-testid="listing-card"
    >
      <div className={styles.imageContainer}>
        <Image
          fill
          className={styles.image}
          src={data.imageSrc}
          alt="Listing"
          data-testid="listing-image"
        />
        <div className={styles.heartButton}>
          <HeartButton
            listingId={data.id}
            currentUser={currentUser}
          />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.location}>{data.locationValue}</div>
        <div className={styles.category}>{reservationDate || data.category}</div>
        <div className={styles.price}>
          $ {price}
          {!reservation && <span className={styles.night}> / night</span>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard; 