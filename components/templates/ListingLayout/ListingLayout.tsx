'use client';

import Container from '@/components/atoms/Container';
import ListingHead from '@/components/organisms/ListingHead';
import ListingInfo from '@/components/organisms/ListingInfo';
import ListingReservation from '@/components/organisms/ListingReservation';
import { categories } from '@/data/categories';
import { SafeListing, SafeReservation, SafeUser } from '@/types';

interface ListingLayoutProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  reservations?: SafeReservation[];
}

const ListingLayout: React.FC<ListingLayoutProps> = ({
  listing,
  currentUser,
  reservations = [],
}) => {
  const category = categories.find((items) => items.label === listing.category);

  return (
    <Container>
      <div className="py-8">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-8">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="flex flex-col gap-8 md:flex-row">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div className="w-full md:w-1/3">
              <ListingReservation
                price={listing.price}
                totalPrice={listing.price}
                onChangeDate={(value) => {}}
                dateRange={null}
                onSubmit={() => {}}
                disabled={false}
                disabledDates={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingLayout;
