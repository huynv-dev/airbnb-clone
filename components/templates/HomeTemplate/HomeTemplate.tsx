'use client';

import { useRooms } from '@/hooks/useRooms';
import { RoomList } from '@/components/organisms/RoomList';
import { Typography } from '@/components/atoms/Typography/Typography';
import { RoomListSkeleton } from '@/components/molecules';

export const HomeTemplate = () => {
  const { rooms, isLoading, error } = useRooms();

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
          <RoomList rooms={rooms || []} />
        )}
      </div>
    </div>
  );
};
