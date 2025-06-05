'use client';

import { useRoom } from '@/hooks/useRoom';
import { Image } from '@/components/atoms/Image/Image';
import { Typography } from '@/components/atoms/Typography/Typography';
import Button from '@/components/atoms/Button';

interface RoomDetailTemplateProps {
  id: string;
}

export function RoomDetailTemplate({ id }: RoomDetailTemplateProps) {
  const { room, isLoading, error } = useRoom(id);

  if (isLoading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Typography >Đang tải thông tin phòng...</Typography>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Typography>Có lỗi xảy ra khi tải thông tin phòng</Typography>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-6">
        <div className="text-start">
          <Typography >{room.name}</Typography>
          <Typography className="mt-2">
            {room.location}
          </Typography>
        </div>

        <Image
          src={room.image}
          alt={room.name}   
        />

        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <div className="col-span-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Typography >Hosted by Airbnb</Typography>
                  <Image
                    className="rounded-full"
                    height={30}
                    width={30}
                    alt="Avatar"
                    src="/images/placeholder.jpg"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Typography >4 khách</Typography>
                  <Typography>2 phòng ngủ</Typography>
                  <Typography>2 phòng tắm</Typography>
                </div>
              </div>
              <hr />
              <Typography>
                {room.description}
              </Typography>
              <hr />
            </div>
          </div>

          <div className="order-first mb-10 md:order-last md:col-span-3">
            <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-1">
                  <Typography>
                    {room.price.toLocaleString()}₫
                  </Typography>
                  <Typography>/đêm</Typography>
                </div>
                <div className="mt-4">
                  <Button>Đặt phòng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 