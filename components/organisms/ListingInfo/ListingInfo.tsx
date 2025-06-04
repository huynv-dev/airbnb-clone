import React from 'react';

interface ListingInfoProps {
  user: any;
  category: any;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  return (
    <div className="mb-4">
      <div className="font-semibold">Host: {user?.name || 'Unknown'}</div>
      <div className="text-gray-500">Category: {category?.label || 'N/A'}</div>
      <div className="text-gray-500">Location: {locationValue}</div>
      <div className="text-gray-500">
        Rooms: {roomCount} | Guests: {guestCount} | Bathrooms: {bathroomCount}
      </div>
      <div className="mt-2">{description}</div>
    </div>
  );
};

export default ListingInfo;
