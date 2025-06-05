import useSWR from 'swr';
import type { Room } from '@/types/room';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface UseRoomsParams {
  filter?: string;
}

export function useRooms(params?: UseRoomsParams) {
  const { data, error, isLoading } = useSWR<{ data: { items: Room[] } }>(
    params?.filter ? `/api/rooms?filter=${params.filter}` : '/api/rooms',
    fetcher
  );

  return {
    rooms: data?.data?.items || [],
    isLoading,
    error
  };
} 