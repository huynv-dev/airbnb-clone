'use client';

import Link from 'next/link';
import { Room } from '@/types/room';
import { Image } from '@/components/atoms/Image';
import { Heart } from '@/components/icons/custom';
import { useState } from 'react';

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/rooms/${room.id}`} className="block">
      <div className="group cursor-pointer">
        {/* Room Image Container */}
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={room.image}
            alt={room.name}
            width={200}
            height={200}
            className="object-cover transition duration-200 rounded-xl aspect-square"
            withBlur={true}
            quality={90}
          />
          
          {/* Favorite Badge */}
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-white rounded-full px-3 py-1 shadow-sm">
              <span className="text-[10px] font-medium">Được khách yêu thích</span>
            </div>
          </div>

          {/* Like Button */}
          <button 
            onClick={handleLike}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full hover:scale-110 active:scale-90 transition-all duration-200"
          >
            <Heart 
              size={24}
              className={`
                transition-colors duration-200
                ${isLiked 
                  ? 'fill-rose-500 stroke-rose-500' 
                  : 'fill-[rgba(0,0,0,0.5)] stroke-white hover:fill-[rgba(0,0,0,0.8)]'
                } 
                stroke-2
              `}
            />
          </button>
        </div>

        {/* Room Info */}
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray-900">{room.location}</p>
            <div className="flex items-center gap-1">
              <span className="text-[13px]">★</span>
              <span className="text-[13px] text-gray-900">{room.rating}</span>
            </div>
          </div>
          <p className="text-[13px] text-gray-500">{room.name}</p>
          <p className="text-[13px] text-gray-500">
            <span className="font-medium text-gray-900">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
                maximumFractionDigits: 0
              }).format(room.price)}
            </span>
            {' '}/ đêm
          </p>
        </div>
      </div>
    </Link>
  );
}; 