import EmptyState from '@/components/templates/EmptyState';
import ReservationsClient from './ReservationsClient';
import { Suspense } from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';
import useReservations from '@/hooks/useReservations';
import { SafeReservation } from '@/types';

export default async function ReservationsPage() {
  const currentUser = await useCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await useReservations({ authorId: currentUser.id });

  function isSafeReservation(r: any): r is SafeReservation {
    return r !== null && r !== undefined;
  }

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReservationsClient reservations={reservations.filter(isSafeReservation)} currentUser={currentUser} />
    </Suspense>
  );
}
