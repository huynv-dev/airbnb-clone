import EmptyState from '@/components/templates/EmptyState';
import FavoritesClient from './FavoritesClient';
import { Suspense } from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

export default async function FavoritesPage() {
  const listings = await useFavorites();
  const currentUser = await useCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState title="No favorites found" subtitle="Looks like you have no favorite listings." />
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </Suspense>
  );
}
