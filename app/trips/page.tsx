import EmptyState from "@/components/templates/EmptyState";
import TripsClient from "./TripsClient";

import useCurrentUser from "@/hooks/useCurrentUser";
import useReservations from "@/hooks/useReservations";

export default async function TripsPage() {
  const currentUser = await useCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login"
      />
    );
  }

  const reservations = await useReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips."
      />
    );
  }

  return (
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  );
} 