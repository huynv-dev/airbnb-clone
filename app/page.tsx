import Container from "@/components/atoms/Container";
import EmptyState from "@/components/templates/EmptyState";
import ListingCard from "@/components/molecules/ListingCard";
import useListings, { IListingsParams } from "@/hooks/useListings";
import useCurrentUser from "@/hooks/useCurrentUser";
import { SafeListing } from "@/types";

interface HomeProps {
  searchParams: IListingsParams
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await useListings(searchParams);
  const currentUser = await useCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    );
  }

  return (
    <Container>
      <div 
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: SafeListing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}
