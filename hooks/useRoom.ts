import useSWR from 'swr';
import type { Room } from '@/types/room';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useRoom(id: string) {
  const { data, error, isLoading } = useSWR<Room>(
    id ? `/api/rooms/${id}` : null,
    fetcher
  );

  return {
    room: data,
    isLoading,
    error
  };
} 