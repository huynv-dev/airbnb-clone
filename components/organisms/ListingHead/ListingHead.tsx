import React from 'react';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: any;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  return (
    <div className="w-full">
      <img src={imageSrc} alt={title} className="mb-4 h-64 w-full rounded-lg object-cover" />
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <div className="mb-2 text-sm text-gray-500">Location: {locationValue}</div>
      <div className="text-xs text-gray-400">ID: {id}</div>
    </div>
  );
};

export default ListingHead;
