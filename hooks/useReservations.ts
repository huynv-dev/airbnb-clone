import prisma from '@/lib/prismadb';
import mockReservations from '@/mocks/data/mockReservations';
import { listings } from '@/mocks/data/listings';

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function useReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    if (process.env.USE_MOCK_DATA === 'true') {
      let reservations = mockReservations;
      if (listingId) {
        reservations = reservations.filter((r: any) => r.listingId === listingId);
      }
      if (userId) {
        reservations = reservations.filter((r: any) => r.userId === userId);
      }
      if (authorId) {
        reservations = reservations.filter((r: any) => {
          const listing = listings.find((l: any) => l.id === r.listingId);
          return listing && listing.host.name === authorId;
        });
      }
      return reservations
        .map((r: any) => {
          const listing = listings.find((l: any) => l.id === r.listingId);
          if (!listing) return null;
          return {
            ...r,
            listing,
          };
        })
        .filter(Boolean);
    }

    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeReservations = reservations.map((reservation: any) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
