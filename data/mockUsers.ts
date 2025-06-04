const mockUsers = [
  {
    id: 'u1',
    name: 'Alice',
    email: 'alice@example.com',
    emailVerified: null,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    hashedPassword: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    favoriteIds: [],
  },
  {
    id: 'u2',
    name: 'Bob',
    email: 'bob@example.com',
    emailVerified: null,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    hashedPassword: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    favoriteIds: [],
  },
];

export default mockUsers;
