'use client';

import { useListings } from '@/hooks/useListings';
import { ListingList } from '@/components/organisms';
import { Typography } from '@/components/atoms/Typography/Typography';
import { RoomListSkeleton } from '@/components/molecules';

export const HomeTemplate = () => {
  const { listings, isLoading, error } = useListings();

  return (
    <div>
      {/* Main Content */}
      <div className="container-fluid mx-auto px-12 py-8">
        {error ? (
          <div className="text-center py-8">
            <Typography variant="text" className="text-gray-500">
              Có lỗi xảy ra khi tải dữ liệu
            </Typography>
            <Typography variant="text" className="text-gray-400 mt-2">
              Vui lòng thử lại sau
            </Typography>
          </div>
        ) : isLoading ? (
          <RoomListSkeleton />
        ) : (
          <ListingList listings={listings || []} />
        )}
      </div>
    </div>
  );
};
