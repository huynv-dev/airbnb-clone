import ListingLayout from '@/components/templates/ListingLayout';
import EmptyState from '@/components/templates/EmptyState';

import useCurrentUser from '@/hooks/useCurrentUser';
import useListing from '@/hooks/useListing';
import useReservations from '@/hooks/useReservations';

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await useListing(params);
  const reservations = await useReservations(params);
  const currentUser = await useCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingLayout listing={listing} currentUser={currentUser} reservations={reservations} />;
}
