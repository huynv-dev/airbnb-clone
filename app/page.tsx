import Container from '@/components/atoms/Container';
import EmptyState from '@/components/templates/EmptyState';
import ListingCard from '@/components/molecules/ListingCard';
import useListings, { IListingsParams } from '@/hooks/useListings';
import useCurrentUser from '@/hooks/useCurrentUser';
import { SafeListing } from '@/types';
import { Suspense } from 'react';

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await useListings(searchParams);
  const currentUser = await useCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing: SafeListing) => (
            <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </Suspense>
  );
}
