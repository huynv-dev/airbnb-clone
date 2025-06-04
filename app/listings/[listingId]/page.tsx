import EmptyState from '@/components/templates/EmptyState';
import ListingLayout from '@/components/templates/ListingLayout/ListingLayout';

import useCurrentUser from '@/hooks/useCurrentUser';
import useListing from '@/hooks/useListing';
import useReservations from '@/hooks/useReservations';
import { SafeReservation } from '@/types';

interface IParams {
  listingId?: string;
}

function isSafeReservation(r: any): r is SafeReservation {
  return r !== null && r !== undefined;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await useListing(params);
  const reservations = await useReservations(params);
  const currentUser = await useCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingLayout
      listing={listing}
      currentUser={currentUser}
      reservations={Array.isArray(reservations) ? reservations.filter(isSafeReservation) : []}
    />
  );
}
