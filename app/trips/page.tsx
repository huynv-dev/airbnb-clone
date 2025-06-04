import EmptyState from '@/components/templates/EmptyState';
import TripsClient from './TripsClient';
import { Suspense } from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';
import useReservations from '@/hooks/useReservations';
import { SafeReservation } from '@/types';

export default async function TripsPage() {
  const currentUser = await useCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await useReservations({ userId: currentUser.id });

  function isSafeReservation(r: any): r is SafeReservation {
    return r !== null && r !== undefined;
  }

  if (reservations.length === 0) {
    return (
      <EmptyState title="No trips found" subtitle="Looks like you haven't reserved any trips." />
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TripsClient reservations={reservations.filter(isSafeReservation)} currentUser={currentUser} />
    </Suspense>
  );
}
