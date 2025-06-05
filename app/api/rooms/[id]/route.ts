import { NextResponse } from 'next/server';
import { rooms } from '@/mocks/data/rooms';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Giả lập delay như API thật
  await new Promise(resolve => setTimeout(resolve, 500));

  const room = rooms.find(r => r.id === params.id);
  
  if (!room) {
    return new NextResponse('Room not found', { status: 404 });
  }

  return NextResponse.json(room);
} 