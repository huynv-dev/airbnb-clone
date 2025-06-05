import { NextResponse } from 'next/server';

import prisma from '@/lib/prismadb';
import useCurrentUser from '@/hooks/useCurrentUser';
import { listings } from '@/mocks/data/listings';

export async function GET() {
  // Trả về mock data listings
  return NextResponse.json({ data: { items: listings } });
}

export async function POST(request: Request) {
  const currentUser = await useCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
