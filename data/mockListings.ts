const mockListings = [
  {
    id: '1',
    title: 'Mock Listing 1',
    imageSrc:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    locationValue: 'VN',
    price: 100,
    user: { name: 'Mock User' },
    description: 'A beautiful mock listing',
    roomCount: 2,
    guestCount: 4,
    bathroomCount: 1,
    createdAt: new Date().toISOString(),
    category: 'apartment',
    userId: 'u1',
  },
  {
    id: '2',
    title: 'Mock Listing 2',
    imageSrc:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    locationValue: 'US',
    price: 200,
    user: { name: 'Another User' },
    description: 'Another mock listing',
    roomCount: 3,
    guestCount: 6,
    bathroomCount: 2,
    createdAt: new Date().toISOString(),
    category: 'house',
    userId: 'u2',
  },
];

export default mockListings;
