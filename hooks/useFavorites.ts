import prisma from '@/lib/prismadb';
import useCurrentUser from './useCurrentUser';
import mockListings from '@/mocks/data/mockListings';

export default async function useFavorites() {
  if (process.env.USE_MOCK_DATA === 'true') {
    // Giả lập user đã thích tất cả mock listings
    return mockListings;
  }
  try {
    const currentUser = await useCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((favorite: any) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
