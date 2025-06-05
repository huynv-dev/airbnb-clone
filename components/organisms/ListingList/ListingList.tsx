import { Listing } from '@/types/listing';
import { RoomCard } from '@/components/molecules/RoomCard';
import { Typography } from '@/components/atoms/Typography/Typography';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Skeleton } from '@/components/atoms/Skeleton';
import 'swiper/css';
import 'swiper/css/navigation';

interface CategoryListingListProps {
  title: string;
  listings: Listing[];
  viewAllLink?: string;
}

const CategoryListingList = ({ title, listings, viewAllLink }: CategoryListingListProps) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mb-12 relative group">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </div>
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
          {listings.map((listing) => (
            <SwiperSlide key={listing.id} className="!w-[200px]">
              <RoomCard room={listing} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const ListingList = ({ listings }: { listings: Listing[] }) => {
  // Phân loại listing theo nhiều tiêu chí khác nhau
  const popularHCMListings = listings
    .filter(listing => listing.location === 'Hồ Chí Minh')
    .sort((a, b) => b.numReviews - a.numReviews)
    .slice(0, 8);

  const upcomingDaNangListings = listings
    .filter(listing => listing.location === 'Đà Nẵng' && listing.instantBook)
    .slice(0, 8);

  const seoulListings = listings
    .filter(listing => listing.location === 'Seoul')
    .slice(0, 8);

  const vanGiangListings = listings
    .filter(listing => listing.location.includes('Văn Giang'))
    .slice(0, 8);

  const luxuryListings = listings
    .filter(listing => listing.price >= 5000000)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const beachListings = listings
    .filter(listing =>
      ['Vũng Tàu', 'Nha Trang', 'Phú Quốc', 'Đà Nẵng'].includes(listing.location)
    )
    .slice(0, 8);

  const instantBookListings = listings
    .filter(listing => listing.instantBook)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const superHostListings = listings
    .filter(listing => listing.host.isSuperHost)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div className="space-y-12">
      {popularHCMListings.length > 0 && (
        <CategoryListingList
          title="Nơi lưu trú được ưa chuộng tại Hồ Chí Minh"
          listings={popularHCMListings}
          viewAllLink="/search?location=ho-chi-minh"
        />
      )}
      {upcomingDaNangListings.length > 0 && (
        <CategoryListingList
          title="Còn phòng tại Đà Nẵng vào tháng tới"
          listings={upcomingDaNangListings}
          viewAllLink="/search?location=da-nang"
        />
      )}
      {seoulListings.length > 0 && (
        <CategoryListingList
          title="Chỗ ở tại Seoul"
          listings={seoulListings}
          viewAllLink="/search?location=seoul"
        />
      )}
      {vanGiangListings.length > 0 && (
        <CategoryListingList
          title="Còn phòng tại Huyện Văn Giang vào cuối tuần tới"
          listings={vanGiangListings}
          viewAllLink="/search?location=van-giang"
        />
      )}
      {luxuryListings.length > 0 && (
        <CategoryListingList
          title="Chỗ ở sang trọng được yêu thích"
          listings={luxuryListings}
          viewAllLink="/search?type=luxury"
        />
      )}
      {beachListings.length > 0 && (
        <CategoryListingList
          title="Nghỉ dưỡng bên bờ biển"
          listings={beachListings}
          viewAllLink="/search?amenities=beach"
        />
      )}
      {instantBookListings.length > 0 && (
        <CategoryListingList
          title="Đặt phòng nhanh"
          listings={instantBookListings}
          viewAllLink="/search?instant=true"
        />
      )}
      {superHostListings.length > 0 && (
        <CategoryListingList
          title="Chủ nhà xuất sắc"
          listings={superHostListings}
          viewAllLink="/search?superhost=true"
        />
      )}
    </div>
  );
}; 

export default ListingList;