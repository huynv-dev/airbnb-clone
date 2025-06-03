import EmptyState from "@/components/templates/EmptyState";
import ReservationsClient from "./ReservationsClient";

import useCurrentUser from "@/hooks/useCurrentUser";
import useReservations from "@/hooks/useReservations";

export default async function ReservationsPage() {
  const currentUser = await useCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login"
      />
    )
  }

  const reservations = await useReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return (
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  );
} 