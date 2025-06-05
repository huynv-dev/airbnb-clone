export type Room = {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  numReviews: number;
  description: string;
  squareMeters: number;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    isSuperHost: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  instantBook: boolean;
  cancellationPolicy: string;
  cleaningFee: number;
  serviceFee: number;
}; 