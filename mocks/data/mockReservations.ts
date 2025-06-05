const mockReservations = [
  {
    id: 'r1',
    userId: 'u1',
    listingId: '1',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000).toISOString(),
    totalPrice: 100,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'r2',
    userId: 'u2',
    listingId: '2',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 2 * 86400000).toISOString(),
    totalPrice: 200,
    createdAt: new Date().toISOString(),
  },
];

export default mockReservations;
