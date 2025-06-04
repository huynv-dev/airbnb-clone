import prisma from '@/lib/prismadb';
import mockListings from '@/data/mockListings';
import mockUsers from '@/data/mockUsers';

interface IParams {
  listingId?: string;
}

export default async function useListing(params: IParams) {
  try {
    const { listingId } = params;

    if (process.env.USE_MOCK_DATA === 'true') {
      const listing = mockListings.find((l) => l.id === listingId);
      if (!listing) return null;
      const user = mockUsers.find((u) => u.id === listing.userId);
      if (!user) return null;
      return {
        ...listing,
        user,
      };
    }

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
