import useSWR from 'swr';
import type { Listing } from '@/types/listing';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface UseListingsParams {
  filter?: string;
}

export function useListings(params?: UseListingsParams) {
  const { data, error, isLoading } = useSWR<{ data: { items: Listing[] } }>(
    params?.filter ? `/api/listings?filter=${params.filter}` : '/api/listings',
    fetcher
  );

  return {
    listings: data?.data?.items || [],
    isLoading,
    error
  };
}
