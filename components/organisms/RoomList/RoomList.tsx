'use client';

import { Room } from '@/types/room';
import { RoomCard } from '@/components/molecules/RoomCard';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useRooms } from '@/hooks/useRooms';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Skeleton } from '@/components/atoms/Skeleton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface CategoryRoomListProps {
  title: string;
  rooms: Room[];
  viewAllLink?: string;
}

const CategoryRoomList = ({ title, rooms, viewAllLink }: CategoryRoomListProps) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mb-12 relative group">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        ref={navigationPrevRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all border opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 disabled:opacity-0"
        style={{ marginLeft: '-20px' }}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        ref={navigationNextRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all border opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 disabled:opacity-0"
        style={{ marginRight: '-20px' }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Swiper container */}
      <div className="px-1">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView="auto"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 24
            }
          }}
          className="!overflow-visible"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id} className="!w-[200px]">
              <RoomCard room={room} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const RoomList = ({ rooms }: { rooms: Room[] }) => {
  // Phân loại phòng theo nhiều tiêu chí khác nhau
  const popularHCMRooms = rooms
    .filter(room => room.location === 'Hồ Chí Minh')
    .sort((a, b) => b.numReviews - a.numReviews)
    .slice(0, 8);

  const upcomingDaNangRooms = rooms
    .filter(room => room.location === 'Đà Nẵng' && room.instantBook)
    .slice(0, 8);

  const seoulRooms = rooms
    .filter(room => room.location === 'Seoul')
    .slice(0, 8);

  const vanGiangRooms = rooms
    .filter(room => room.location.includes('Văn Giang'))
    .slice(0, 8);

  const luxuryRooms = rooms
    .filter(room => room.price >= 5000000)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const beachRooms = rooms
    .filter(room =>
      ['Vũng Tàu', 'Nha Trang', 'Phú Quốc', 'Đà Nẵng'].includes(room.location)
    )
    .slice(0, 8);

  const instantBookRooms = rooms
    .filter(room => room.instantBook)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const superHostRooms = rooms
    .filter(room => room.host.isSuperHost)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div className="space-y-12">
      {popularHCMRooms.length > 0 && (
        <CategoryRoomList
          title="Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"
          rooms={popularHCMRooms}
          viewAllLink="/search?location=ho-chi-minh"
        />
      )}

      {upcomingDaNangRooms.length > 0 && (
        <CategoryRoomList
          title="Còn phòng tại Đà Nẵng vào tháng tới"
          rooms={upcomingDaNangRooms}
          viewAllLink="/search?location=da-nang"
        />
      )}

      {seoulRooms.length > 0 && (
        <CategoryRoomList
          title="Chỗ ở tại Seoul"
          rooms={seoulRooms}
          viewAllLink="/search?location=seoul"
        />
      )}

      {vanGiangRooms.length > 0 && (
        <CategoryRoomList
          title="Còn phòng tại Huyện Văn Giang vào cuối tuần tới"
          rooms={vanGiangRooms}
          viewAllLink="/search?location=van-giang"
        />
      )}

      {luxuryRooms.length > 0 && (
        <CategoryRoomList
          title="Chỗ ở sang trọng được yêu thích"
          rooms={luxuryRooms}
          viewAllLink="/search?type=luxury"
        />
      )}

      {beachRooms.length > 0 && (
        <CategoryRoomList
          title="Nghỉ dưỡng bên bờ biển"
          rooms={beachRooms}
          viewAllLink="/search?amenities=beach"
        />
      )}

      {instantBookRooms.length > 0 && (
        <CategoryRoomList
          title="Đặt phòng nhanh"
          rooms={instantBookRooms}
          viewAllLink="/search?instant=true"
        />
      )}

      {superHostRooms.length > 0 && (
        <CategoryRoomList
          title="Chỗ ở của Chủ nhà siêu cấp"
          rooms={superHostRooms}
          viewAllLink="/search?superhost=true"
        />
      )}
    </div>
  );
};

export function RoomListContainer() {
  const { rooms, isLoading, error } = useRooms();

  if (isLoading) {
    return (
      <div className="space-y-12">
        {/* Create 4 category sections */}
        {Array(4).fill(0).map((_, index) => (
          <div key={index} className="mb-12 relative">
            {/* Category title skeleton */}
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-8 w-64" />
            </div>

            {/* Swiper container skeleton */}
            <div className="px-1">
              <div className="flex gap-6">
                {/* Show 6 room card skeletons */}
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="!w-[200px] flex-shrink-0">
                    <div className="space-y-3">
                      {/* Image skeleton */}
                      <Skeleton className="w-full aspect-square rounded-xl" />
                      
                      {/* Price skeleton */}
                      <div className="flex items-center space-x-1">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                      
                      {/* Title and rating skeleton */}
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-28" />
                        <div className="flex items-center space-x-1">
                          <Skeleton className="h-4 w-4" />
                          <Skeleton className="h-4 w-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Typography type="danger">Có lỗi xảy ra khi tải danh sách phòng</Typography>
      </div>
    );
  }

  return (
    <RoomList rooms={rooms} />
  );
} 