import { NextResponse } from 'next/server';
import { rooms as mockRooms } from '@/mocks/data/rooms';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit')) || 12;
  const offset = Number(searchParams.get('offset')) || 0;
  const filter = searchParams.get('filter');

  try {
    let filteredRooms = [...mockRooms];

    // Apply filter if provided
    if (filter && filter !== 'Tất cả') {
      filteredRooms = filteredRooms.filter(room => 
        room.description.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // Calculate pagination
    const total = filteredRooms.length;
    const paginatedRooms = filteredRooms.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      data: {
        items: paginatedRooms,
        total,
        hasMore,
      },
    });
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 