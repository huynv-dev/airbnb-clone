import type { Room } from '@/types/room';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Căn hộ tại Vũng Tàu',
    location: 'Vũng Tàu',
    price: 983749,
    pricePerNight: 983749,
    squareMeters: 65,
    image: 'https://picsum.photos/seed/room1/800/600',
    images: [
      'https://picsum.photos/seed/room1-1/800/600',
      'https://picsum.photos/seed/room1-2/800/600',
      'https://picsum.photos/seed/room1-3/800/600',
      'https://picsum.photos/seed/room1-4/800/600',
      'https://picsum.photos/seed/room1-5/800/600'
    ],
    rating: 5.0,
    numReviews: 120,
    description: 'Căn hộ cao cấp view biển tuyệt đẹp, nội thất sang trọng, đầy đủ tiện nghi.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Máy giặt',
      'TV',
      'Điều hòa',
      'Ban công',
      'Hồ bơi',
      'Gym'
    ],
    host: {
      name: 'Minh Anh',
      avatar: 'https://picsum.photos/seed/host1/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.346_377,
      lng: 107.084_59
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 100000,
    serviceFee: 50000
  },
  {
    id: '2',
    name: 'Căn hộ Luxury View Biển',
    location: 'Vũng Tàu',
    price: 1341000,
    pricePerNight: 1341000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room2/800/600',
    images: [
      'https://picsum.photos/seed/room2-1/800/600',
      'https://picsum.photos/seed/room2-2/800/600',
      'https://picsum.photos/seed/room2-3/800/600',
      'https://picsum.photos/seed/room2-4/800/600'
    ],
    rating: 4.94,
    numReviews: 98,
    description: 'Căn hộ cao cấp view biển 180 độ, thiết kế hiện đại, nội thất cao cấp nhập khẩu.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Máy giặt',
      'TV 4K',
      'Điều hòa',
      'Ban công rộng',
      'Hồ bơi vô cực',
      'Gym',
      'Spa'
    ],
    host: {
      name: 'Thu Hà',
      avatar: 'https://picsum.photos/seed/host2/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.348_925,
      lng: 107.082_681
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 70000
  },
  {
    id: '3',
    name: 'Căn hộ Studio Giá Tốt',
    location: 'Vũng Tàu',
    price: 722000,
    pricePerNight: 722000,
    squareMeters: 45,
    image: 'https://picsum.photos/seed/room3/800/600',
    images: [
      'https://picsum.photos/seed/room3-1/800/600',
      'https://picsum.photos/seed/room3-2/800/600',
      'https://picsum.photos/seed/room3-3/800/600'
    ],
    rating: 4.82,
    numReviews: 210,
    description: 'Căn hộ studio tiện nghi, vị trí trung tâm, giá tốt cho 2-3 người.',
    maxGuests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp mini',
      'TV',
      'Điều hòa',
      'Ban công',
      'Hồ bơi'
    ],
    host: {
      name: 'Hoàng Nam',
      avatar: 'https://picsum.photos/seed/host3/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.346_123,
      lng: 107.083_456
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 80000,
    serviceFee: 40000
  },
  {
    id: '4',
    name: 'Căn hộ Hoàn Kiếm',
    location: 'Hà Nội',
    price: 957977,
    pricePerNight: 957977,
    squareMeters: 55,
    image: 'https://picsum.photos/seed/room4/800/600',
    images: [
      'https://picsum.photos/seed/room4-1/800/600',
      'https://picsum.photos/seed/room4-2/800/600',
      'https://picsum.photos/seed/room4-3/800/600',
      'https://picsum.photos/seed/room4-4/800/600'
    ],
    rating: 4.97,
    numReviews: 145,
    description: 'Căn hộ view Hồ Hoàn Kiếm, thiết kế hiện đại pha trộn nét đẹp cổ điển.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Máy giặt',
      'TV',
      'Điều hòa',
      'Ban công view hồ',
      'Dọn phòng hàng ngày'
    ],
    host: {
      name: 'Quang Minh',
      avatar: 'https://picsum.photos/seed/host4/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.028_461,
      lng: 105.852_291
    },
    instantBook: true,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 120000,
    serviceFee: 60000
  },
  {
    id: '5',
    name: 'Căn hộ Ba Đình',
    location: 'Hà Nội',
    price: 820000,
    pricePerNight: 820000,
    squareMeters: 50,
    image: 'https://picsum.photos/seed/room5/800/600',
    images: [
      'https://picsum.photos/seed/room5-1/800/600',
      'https://picsum.photos/seed/room5-2/800/600',
      'https://picsum.photos/seed/room5-3/800/600'
    ],
    rating: 4.8,
    numReviews: 89,
    description: 'Căn hộ yên tĩnh trong khu phố cổ, thiết kế tối giản hiện đại.',
    maxGuests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp',
      'TV',
      'Điều hòa',
      'Ban công',
      'Máy giặt'
    ],
    host: {
      name: 'Thanh Hương',
      avatar: 'https://picsum.photos/seed/host5/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 21.035_367,
      lng: 105.823_765
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 90000,
    serviceFee: 45000
  },
  {
    id: '6',
    name: 'Biệt thự Đà Lạt View Đồi',
    location: 'Đà Lạt',
    price: 2500000,
    pricePerNight: 2500000,
    squareMeters: 200,
    image: 'https://picsum.photos/seed/room6/800/600',
    images: [
      'https://picsum.photos/seed/room6-1/800/600',
      'https://picsum.photos/seed/room6-2/800/600',
      'https://picsum.photos/seed/room6-3/800/600'
    ],
    rating: 4.95,
    numReviews: 156,
    description: 'Biệt thự sang trọng với view đồi tuyệt đẹp, sân vườn rộng rãi và không gian yên tĩnh.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Lò sưởi',
      'TV',
      'Sân vườn',
      'BBQ',
      'Bãi đậu xe',
      'Máy giặt'
    ],
    host: {
      name: 'Anh Tuấn',
      avatar: 'https://picsum.photos/seed/host6/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 11.943_574,
      lng: 108.437_233
    },
    instantBook: true,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '7',
    name: 'Căn hộ Panorama Nha Trang',
    location: 'Nha Trang',
    price: 1800000,
    pricePerNight: 1800000,
    squareMeters: 90,
    image: 'https://picsum.photos/seed/room7/800/600',
    images: [
      'https://picsum.photos/seed/room7-1/800/600',
      'https://picsum.photos/seed/room7-2/800/600',
      'https://picsum.photos/seed/room7-3/800/600'
    ],
    rating: 4.88,
    numReviews: 203,
    description: 'Căn hộ view biển 360 độ, nội thất cao cấp, tiện nghi hiện đại bậc nhất.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Bar',
      'Bãi biển riêng',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Thảo Vy',
      avatar: 'https://picsum.photos/seed/host7/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 12.235_446,
      lng: 109.196_677
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '8',
    name: 'Nhà gỗ Mộc Châu',
    location: 'Mộc Châu',
    price: 1200000,
    pricePerNight: 1200000,
    squareMeters: 80,
    image: 'https://picsum.photos/seed/room8/800/600',
    images: [
      'https://picsum.photos/seed/room8-1/800/600',
      'https://picsum.photos/seed/room8-2/800/600',
      'https://picsum.photos/seed/room8-3/800/600'
    ],
    rating: 4.92,
    numReviews: 167,
    description: 'Nhà gỗ truyền thống giữa thung lũng, view đồi chè và không gian trong lành.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp',
      'Lò sưởi',
      'Vườn rau',
      'BBQ',
      'Võng',
      'Bãi đậu xe'
    ],
    host: {
      name: 'Chị Hoa',
      avatar: 'https://picsum.photos/seed/host8/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 20.829_891,
      lng: 104.689_344
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 100000,
    serviceFee: 60000
  },
  {
    id: '9',
    name: 'Penthouse Đà Nẵng',
    location: 'Đà Nẵng',
    price: 3500000,
    pricePerNight: 3500000,
    squareMeters: 150,
    image: 'https://picsum.photos/seed/room9/800/600',
    images: [
      'https://picsum.photos/seed/room9-1/800/600',
      'https://picsum.photos/seed/room9-2/800/600',
      'https://picsum.photos/seed/room9-3/800/600'
    ],
    rating: 4.96,
    numReviews: 189,
    description: 'Penthouse sang trọng với view toàn cảnh thành phố và biển Đà Nẵng.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Jacuzzi',
      'Phòng xông hơi',
      'Bar mini',
      'Ban công panorama',
      'Dịch vụ phòng 24/7'
    ],
    host: {
      name: 'Quốc Bảo',
      avatar: 'https://picsum.photos/seed/host9/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 16.047_079,
      lng: 108.224_785
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '10',
    name: 'Homestay Phố Cổ',
    location: 'Hội An',
    price: 900000,
    pricePerNight: 900000,
    squareMeters: 70,
    image: 'https://picsum.photos/seed/room10/800/600',
    images: [
      'https://picsum.photos/seed/room10-1/800/600',
      'https://picsum.photos/seed/room10-2/800/600',
      'https://picsum.photos/seed/room10-3/800/600'
    ],
    rating: 4.89,
    numReviews: 234,
    description: 'Homestay truyền thống trong lòng phố cổ Hội An, không gian yên bình.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Sân trong',
      'Xe đạp miễn phí',
      'Tour phố cổ',
      'Lớp nấu ăn',
      'Giặt ủi'
    ],
    host: {
      name: 'Cô Linh',
      avatar: 'https://picsum.photos/seed/host10/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 15.878_131,
      lng: 108.327_843
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 80000,
    serviceFee: 40000
  },
  {
    id: '11',
    name: 'Villa Hồ Tây',
    location: 'Hà Nội',
    price: 4500000,
    pricePerNight: 4500000,
    squareMeters: 300,
    image: 'https://picsum.photos/seed/room11/800/600',
    images: [
      'https://picsum.photos/seed/room11-1/800/600',
      'https://picsum.photos/seed/room11-2/800/600',
      'https://picsum.photos/seed/room11-3/800/600'
    ],
    rating: 4.97,
    numReviews: 145,
    description: 'Villa sang trọng bên Hồ Tây với kiến trúc Đông Dương độc đáo.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 6,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Vườn Nhật',
      'Phòng chiếu phim',
      'Phòng game',
      'Garage',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Gia Huy',
      avatar: 'https://picsum.photos/seed/host11/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.052_088,
      lng: 105.823_395
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '12',
    name: 'Căn hộ The Manor',
    location: 'Hồ Chí Minh',
    price: 2800000,
    pricePerNight: 2800000,
    squareMeters: 110,
    image: 'https://picsum.photos/seed/room12/800/600',
    images: [
      'https://picsum.photos/seed/room12-1/800/600',
      'https://picsum.photos/seed/room12-2/800/600',
      'https://picsum.photos/seed/room12-3/800/600'
    ],
    rating: 4.91,
    numReviews: 178,
    description: 'Căn hộ cao cấp tại trung tâm Sài Gòn với nội thất sang trọng.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Tennis',
      'Spa',
      'Nhà hàng',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Minh Khôi',
      avatar: 'https://picsum.photos/seed/host12/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.787_811,
      lng: 106.702_777
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '13',
    name: 'Căn hộ River Gate',
    location: 'Hồ Chí Minh',
    price: 1600000,
    pricePerNight: 1600000,
    squareMeters: 75,
    image: 'https://picsum.photos/seed/room13/800/600',
    images: [
      'https://picsum.photos/seed/room13-1/800/600',
      'https://picsum.photos/seed/room13-2/800/600',
      'https://picsum.photos/seed/room13-3/800/600'
    ],
    rating: 4.85,
    numReviews: 142,
    description: 'Căn hộ hiện đại view sông Sài Gòn, nội thất tinh tế.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Công viên',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Thu Trang',
      avatar: 'https://picsum.photos/seed/host13/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.756_789,
      lng: 106.704_567
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '14',
    name: 'Biệt thự Sapa View Núi',
    location: 'Sapa',
    price: 3200000,
    pricePerNight: 3200000,
    squareMeters: 180,
    image: 'https://picsum.photos/seed/room14/800/600',
    images: [
      'https://picsum.photos/seed/room14-1/800/600',
      'https://picsum.photos/seed/room14-2/800/600',
      'https://picsum.photos/seed/room14-3/800/600'
    ],
    rating: 4.94,
    numReviews: 167,
    description: 'Biệt thự sang trọng với view núi Fansipan, không gian ấm cúng.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Lò sưởi',
      'Vườn BBQ',
      'Phòng xông hơi',
      'Bồn tắm ngoài trời',
      'Dịch vụ đưa đón'
    ],
    host: {
      name: 'Anh Dũng',
      avatar: 'https://picsum.photos/seed/host14/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 22.357_789,
      lng: 103.819_876
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '15',
    name: 'Studio Minimalist',
    location: 'Hồ Chí Minh',
    price: 800000,
    pricePerNight: 800000,
    squareMeters: 45,
    image: 'https://picsum.photos/seed/room15/800/600',
    images: [
      'https://picsum.photos/seed/room15-1/800/600',
      'https://picsum.photos/seed/room15-2/800/600',
      'https://picsum.photos/seed/room15-3/800/600'
    ],
    rating: 4.87,
    numReviews: 198,
    description: 'Căn hộ phong cách tối giản, phù hợp cho doanh nhân.',
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp mini',
      'Smart TV',
      'Máy giặt',
      'Bàn làm việc',
      'Gym'
    ],
    host: {
      name: 'Minh Anh',
      avatar: 'https://picsum.photos/seed/host15/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.772_345,
      lng: 106.698_765
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 100000,
    serviceFee: 50000
  },
  {
    id: '16',
    name: 'Căn hộ Landmark 81',
    location: 'Hồ Chí Minh',
    price: 5000000,
    pricePerNight: 5000000,
    squareMeters: 120,
    image: 'https://picsum.photos/seed/room16/800/600',
    images: [
      'https://picsum.photos/seed/room16-1/800/600',
      'https://picsum.photos/seed/room16-2/800/600',
      'https://picsum.photos/seed/room16-3/800/600'
    ],
    rating: 4.98,
    numReviews: 89,
    description: 'Căn hộ siêu sang tại tòa nhà cao nhất Việt Nam với view toàn cảnh thành phố.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Bar',
      'Nhà hàng 5 sao',
      'Dịch vụ phòng 24/7'
    ],
    host: {
      name: 'Quang Minh',
      avatar: 'https://picsum.photos/seed/host16/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.795_132,
      lng: 106.721_789
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 500000,
    serviceFee: 250000
  },
  {
    id: '17',
    name: 'Nhà vườn Cần Thơ',
    location: 'Cần Thơ',
    price: 1500000,
    pricePerNight: 1500000,
    squareMeters: 150,
    image: 'https://picsum.photos/seed/room17/800/600',
    images: [
      'https://picsum.photos/seed/room17-1/800/600',
      'https://picsum.photos/seed/room17-2/800/600',
      'https://picsum.photos/seed/room17-3/800/600'
    ],
    rating: 4.91,
    numReviews: 156,
    description: 'Nhà vườn rộng rãi bên sông, không gian xanh mát với nhiều cây ăn trái.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Vườn cây',
      'Võng',
      'BBQ',
      'Bến thuyền',
      'Tour chợ nổi'
    ],
    host: {
      name: 'Chú Tám',
      avatar: 'https://picsum.photos/seed/host17/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.045_678,
      lng: 105.789_123
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 120000,
    serviceFee: 60000
  },
  {
    id: '18',
    name: 'Căn hộ FLC Sầm Sơn',
    location: 'Thanh Hóa',
    price: 2200000,
    pricePerNight: 2200000,
    squareMeters: 95,
    image: 'https://picsum.photos/seed/room18/800/600',
    images: [
      'https://picsum.photos/seed/room18-1/800/600',
      'https://picsum.photos/seed/room18-2/800/600',
      'https://picsum.photos/seed/room18-3/800/600'
    ],
    rating: 4.89,
    numReviews: 134,
    description: 'Căn hộ cao cấp trong quần thể resort 5 sao, view biển tuyệt đẹp.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Golf',
      'Bãi biển riêng',
      'Nhà hàng'
    ],
    host: {
      name: 'Hồng Nhung',
      avatar: 'https://picsum.photos/seed/host18/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 19.756_789,
      lng: 105.902_345
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '19',
    name: 'Biệt thự Phú Quốc',
    location: 'Phú Quốc',
    price: 4200000,
    pricePerNight: 4200000,
    squareMeters: 250,
    image: 'https://picsum.photos/seed/room19/800/600',
    images: [
      'https://picsum.photos/seed/room19-1/800/600',
      'https://picsum.photos/seed/room19-2/800/600',
      'https://picsum.photos/seed/room19-3/800/600'
    ],
    rating: 4.96,
    numReviews: 178,
    description: 'Biệt thự sang trọng với bãi biển riêng, thiết kế hiện đại độc đáo.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi vô cực',
      'Bãi biển riêng',
      'BBQ',
      'Kayak',
      'Dịch vụ đầu bếp',
      'Spa'
    ],
    host: {
      name: 'Quốc Việt',
      avatar: 'https://picsum.photos/seed/host19/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.289_456,
      lng: 103.984_567
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '20',
    name: 'Căn hộ Times City',
    location: 'Hà Nội',
    price: 1400000,
    pricePerNight: 1400000,
    squareMeters: 70,
    image: 'https://picsum.photos/seed/room20/800/600',
    images: [
      'https://picsum.photos/seed/room20-1/800/600',
      'https://picsum.photos/seed/room20-2/800/600',
      'https://picsum.photos/seed/room20-3/800/600'
    ],
    rating: 4.88,
    numReviews: 145,
    description: 'Căn hộ hiện đại trong khu đô thị cao cấp, đầy đủ tiện nghi.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Công viên',
      'Trung tâm thương mại',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Mai Anh',
      avatar: 'https://picsum.photos/seed/host20/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 20.994_567,
      lng: 105.868_901
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 70000
  },
  {
    id: '21',
    name: 'Bungalow Mũi Né',
    location: 'Phan Thiết',
    price: 1800000,
    pricePerNight: 1800000,
    squareMeters: 60,
    image: 'https://picsum.photos/seed/room21/800/600',
    images: [
      'https://picsum.photos/seed/room21-1/800/600',
      'https://picsum.photos/seed/room21-2/800/600',
      'https://picsum.photos/seed/room21-3/800/600'
    ],
    rating: 4.87,
    numReviews: 167,
    description: 'Bungalow ven biển với thiết kế mở, hòa mình vào thiên nhiên.',
    maxGuests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp mini',
      'Bãi biển riêng',
      'Võng',
      'Dịch vụ massage',
      'Cho thuê xe máy'
    ],
    host: {
      name: 'Thanh Thảo',
      avatar: 'https://picsum.photos/seed/host21/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.933_456,
      lng: 108.287_654
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '22',
    name: 'Nhà gỗ Mai Châu',
    location: 'Hòa Bình',
    price: 1000000,
    pricePerNight: 1000000,
    squareMeters: 80,
    image: 'https://picsum.photos/seed/room22/800/600',
    images: [
      'https://picsum.photos/seed/room22-1/800/600',
      'https://picsum.photos/seed/room22-2/800/600',
      'https://picsum.photos/seed/room22-3/800/600'
    ],
    rating: 4.92,
    numReviews: 203,
    description: 'Nhà sàn truyền thống của người Thái, view thung lũng tuyệt đẹp.',
    maxGuests: 6,
    bedrooms: 2,
    beds: 4,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Sân vườn',
      'BBQ',
      'Tour làng nghề',
      'Cho thuê xe đạp',
      'Đốt lửa trại'
    ],
    host: {
      name: 'Cô Hương',
      avatar: 'https://picsum.photos/seed/host22/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.683_456,
      lng: 105.084_567
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 100000,
    serviceFee: 50000
  },
  {
    id: '23',
    name: 'Căn hộ Royal City',
    location: 'Hà Nội',
    price: 1600000,
    pricePerNight: 1600000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room23/800/600',
    images: [
      'https://picsum.photos/seed/room23-1/800/600',
      'https://picsum.photos/seed/room23-2/800/600',
      'https://picsum.photos/seed/room23-3/800/600'
    ],
    rating: 4.89,
    numReviews: 167,
    description: 'Căn hộ cao cấp trong khu đô thị Royal City, tiện nghi hiện đại.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Vincom',
      'Sân trượt băng',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Minh Tú',
      avatar: 'https://picsum.photos/seed/host23/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 21.002_345,
      lng: 105.816_789
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '24',
    name: 'Biệt thự Vinhomes Ocean Park',
    location: 'Hà Nội',
    price: 3500000,
    pricePerNight: 3500000,
    squareMeters: 200,
    image: 'https://picsum.photos/seed/room24/800/600',
    images: [
      'https://picsum.photos/seed/room24-1/800/600',
      'https://picsum.photos/seed/room24-2/800/600',
      'https://picsum.photos/seed/room24-3/800/600'
    ],
    rating: 4.95,
    numReviews: 89,
    description: 'Biệt thự hiện đại bên hồ nước mặn nhân tạo lớn nhất Việt Nam.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Sân vườn',
      'BBQ',
      'Bãi biển nhân tạo',
      'Công viên',
      'Smart home'
    ],
    host: {
      name: 'Gia Bảo',
      avatar: 'https://picsum.photos/seed/host24/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.984_567,
      lng: 105.964_123
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '25',
    name: 'Căn hộ Panorama Nha Trang',
    location: 'Nha Trang',
    price: 2000000,
    pricePerNight: 2000000,
    squareMeters: 100,
    image: 'https://picsum.photos/seed/room25/800/600',
    images: [
      'https://picsum.photos/seed/room25-1/800/600',
      'https://picsum.photos/seed/room25-2/800/600',
      'https://picsum.photos/seed/room25-3/800/600'
    ],
    rating: 4.93,
    numReviews: 156,
    description: 'Căn hộ view biển 360 độ, nội thất cao cấp, tiện nghi hiện đại.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Bar',
      'Bãi biển riêng',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Quỳnh Anh',
      avatar: 'https://picsum.photos/seed/host25/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 12.235_678,
      lng: 109.196_789
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '26',
    name: 'Căn hộ Green Bay Garden',
    location: 'Hạ Long',
    price: 1200000,
    pricePerNight: 1200000,
    squareMeters: 65,
    image: 'https://picsum.photos/seed/room26/800/600',
    images: [
      'https://picsum.photos/seed/room26-1/800/600',
      'https://picsum.photos/seed/room26-2/800/600',
      'https://picsum.photos/seed/room26-3/800/600'
    ],
    rating: 4.86,
    numReviews: 123,
    description: 'Căn hộ view vịnh Hạ Long, nội thất hiện đại, tiện nghi đầy đủ.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp',
      'Ban công view vịnh',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Bãi đỗ xe'
    ],
    host: {
      name: 'Hải Long',
      avatar: 'https://picsum.photos/seed/host26/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 20.956_789,
      lng: 107.078_901
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 100000,
    serviceFee: 50000
  },
  {
    id: '27',
    name: 'Villa Đà Lạt Garden',
    location: 'Đà Lạt',
    price: 2800000,
    pricePerNight: 2800000,
    squareMeters: 180,
    image: 'https://picsum.photos/seed/room27/800/600',
    images: [
      'https://picsum.photos/seed/room27-1/800/600',
      'https://picsum.photos/seed/room27-2/800/600',
      'https://picsum.photos/seed/room27-3/800/600'
    ],
    rating: 4.94,
    numReviews: 178,
    description: 'Villa phong cách châu Âu với vườn hoa rộng lớn, view đồi thông.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Vườn hoa',
      'BBQ',
      'Lò sưởi',
      'Sân tennis',
      'Nhà kính',
      'Dịch vụ ăn sáng'
    ],
    host: {
      name: 'Gia Hân',
      avatar: 'https://picsum.photos/seed/host27/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 11.946_789,
      lng: 108.436_789
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '28',
    name: 'Căn hộ Central Park',
    location: 'Hồ Chí Minh',
    price: 2500000,
    pricePerNight: 2500000,
    squareMeters: 100,
    image: 'https://picsum.photos/seed/room28/800/600',
    images: [
      'https://picsum.photos/seed/room28-1/800/600',
      'https://picsum.photos/seed/room28-2/800/600',
      'https://picsum.photos/seed/room28-3/800/600'
    ],
    rating: 4.92,
    numReviews: 145,
    description: 'Căn hộ cao cấp tại trung tâm Sài Gòn với view công viên tuyệt đẹp.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Tennis',
      'Công viên',
      'Nhà hàng'
    ],
    host: {
      name: 'Quốc Anh',
      avatar: 'https://picsum.photos/seed/host28/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.794_567,
      lng: 106.723_456
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '29',
    name: 'Biệt thự Flamingo Đại Lải',
    location: 'Vĩnh Phúc',
    price: 4000000,
    pricePerNight: 4000000,
    squareMeters: 250,
    image: 'https://picsum.photos/seed/room29/800/600',
    images: [
      'https://picsum.photos/seed/room29-1/800/600',
      'https://picsum.photos/seed/room29-2/800/600',
      'https://picsum.photos/seed/room29-3/800/600'
    ],
    rating: 4.96,
    numReviews: 167,
    description: 'Biệt thự nghỉ dưỡng sang trọng bên hồ Đại Lải với kiến trúc độc đáo.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Sân Golf',
      'BBQ',
      'Spa',
      'Phòng xông hơi',
      'Bến du thuyền'
    ],
    host: {
      name: 'Hoàng Minh',
      avatar: 'https://picsum.photos/seed/host29/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.323_456,
      lng: 105.767_890
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '30',
    name: 'Căn hộ Masteri Thảo Điền',
    location: 'Hồ Chí Minh',
    price: 1800000,
    pricePerNight: 1800000,
    squareMeters: 75,
    image: 'https://picsum.photos/seed/room30/800/600',
    images: [
      'https://picsum.photos/seed/room30-1/800/600',
      'https://picsum.photos/seed/room30-2/800/600',
      'https://picsum.photos/seed/room30-3/800/600'
    ],
    rating: 4.88,
    numReviews: 198,
    description: 'Căn hộ cao cấp view sông Sài Gòn tại khu vực Thảo Điền.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Công viên',
      'Vincom',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Thu Hà',
      avatar: 'https://picsum.photos/seed/host30/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.802_345,
      lng: 106.738_901
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '31',
    name: 'Nhà sàn Bản Lác',
    location: 'Mai Châu',
    price: 800000,
    pricePerNight: 800000,
    squareMeters: 60,
    image: 'https://picsum.photos/seed/room31/800/600',
    images: [
      'https://picsum.photos/seed/room31-1/800/600',
      'https://picsum.photos/seed/room31-2/800/600',
      'https://picsum.photos/seed/room31-3/800/600'
    ],
    rating: 4.85,
    numReviews: 234,
    description: 'Nhà sàn truyền thống của người Thái với view thung lũng Mai Châu.',
    maxGuests: 6,
    bedrooms: 2,
    beds: 4,
    bathrooms: 1,
    amenities: [
      'Wifi',
      'Bếp',
      'Võng',
      'Tour làng nghề',
      'Đốt lửa trại',
      'Thuê xe đạp',
      'Ẩm thực địa phương'
    ],
    host: {
      name: 'Cô Mai',
      avatar: 'https://picsum.photos/seed/host31/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.683_456,
      lng: 104.993_789
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 80000,
    serviceFee: 40000
  },
  {
    id: '32',
    name: 'Căn hộ Sun Grand Marina',
    location: 'Hạ Long',
    price: 2200000,
    pricePerNight: 2200000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room32/800/600',
    images: [
      'https://picsum.photos/seed/room32-1/800/600',
      'https://picsum.photos/seed/room32-2/800/600',
      'https://picsum.photos/seed/room32-3/800/600'
    ],
    rating: 4.91,
    numReviews: 167,
    description: 'Căn hộ cao cấp view vịnh Hạ Long, nội thất sang trọng.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi vô cực',
      'Gym',
      'Spa',
      'Bar',
      'Tour vịnh',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Quang Hải',
      avatar: 'https://picsum.photos/seed/host32/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 20.959_789,
      lng: 107.045_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '33',
    name: 'Biệt thự Vườn Vua Resort',
    location: 'Phú Thọ',
    price: 3000000,
    pricePerNight: 3000000,
    squareMeters: 200,
    image: 'https://picsum.photos/seed/room33/800/600',
    images: [
      'https://picsum.photos/seed/room33-1/800/600',
      'https://picsum.photos/seed/room33-2/800/600',
      'https://picsum.photos/seed/room33-3/800/600'
    ],
    rating: 4.93,
    numReviews: 145,
    description: 'Biệt thự nghỉ dưỡng trong quần thể resort 5 sao với view núi tuyệt đẹp.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Sân Golf',
      'Tennis',
      'Spa',
      'Nhà hàng',
      'Dịch vụ đưa đón'
    ],
    host: {
      name: 'Gia Khánh',
      avatar: 'https://picsum.photos/seed/host33/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.323_456,
      lng: 105.123_789
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '34',
    name: 'Căn hộ Vinpearl Condotel',
    location: 'Đà Nẵng',
    price: 2500000,
    pricePerNight: 2500000,
    squareMeters: 95,
    image: 'https://picsum.photos/seed/room34/800/600',
    images: [
      'https://picsum.photos/seed/room34-1/800/600',
      'https://picsum.photos/seed/room34-2/800/600',
      'https://picsum.photos/seed/room34-3/800/600'
    ],
    rating: 4.94,
    numReviews: 189,
    description: 'Căn hộ cao cấp view biển Mỹ Khê, nội thất sang trọng.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Bar',
      'Bãi biển riêng',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Thanh Tùng',
      avatar: 'https://picsum.photos/seed/host34/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 16.047_890,
      lng: 108.234_567
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '35',
    name: 'Biệt thự Onsen Villa',
    location: 'Hòa Bình',
    price: 5000000,
    pricePerNight: 5000000,
    squareMeters: 300,
    image: 'https://picsum.photos/seed/room35/800/600',
    images: [
      'https://picsum.photos/seed/room35-1/800/600',
      'https://picsum.photos/seed/room35-2/800/600',
      'https://picsum.photos/seed/room35-3/800/600'
    ],
    rating: 4.97,
    numReviews: 123,
    description: 'Biệt thự nghỉ dưỡng phong cách Nhật với onsen riêng và view núi.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Onsen riêng',
      'Vườn Zen',
      'BBQ',
      'Karaoke',
      'Đạp xe',
      'Massage'
    ],
    host: {
      name: 'Minh Đức',
      avatar: 'https://picsum.photos/seed/host35/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.813_456,
      lng: 105.345_678
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 500000,
    serviceFee: 250000
  },
  {
    id: '36',
    name: 'Căn hộ Mường Thanh',
    location: 'Nha Trang',
    price: 1500000,
    pricePerNight: 1500000,
    squareMeters: 70,
    image: 'https://picsum.photos/seed/room36/800/600',
    images: [
      'https://picsum.photos/seed/room36-1/800/600',
      'https://picsum.photos/seed/room36-2/800/600',
      'https://picsum.photos/seed/room36-3/800/600'
    ],
    rating: 4.86,
    numReviews: 178,
    description: 'Căn hộ view biển trực diện tại trung tâm thành phố Nha Trang.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Bãi biển',
      'Nhà hàng',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Thùy Linh',
      avatar: 'https://picsum.photos/seed/host36/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 12.238_901,
      lng: 109.196_234
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '37',
    name: 'Nhà gỗ Cù Lần',
    location: 'Đà Lạt',
    price: 1800000,
    pricePerNight: 1800000,
    squareMeters: 90,
    image: 'https://picsum.photos/seed/room37/800/600',
    images: [
      'https://picsum.photos/seed/room37-1/800/600',
      'https://picsum.photos/seed/room37-2/800/600',
      'https://picsum.photos/seed/room37-3/800/600'
    ],
    rating: 4.92,
    numReviews: 145,
    description: 'Nhà gỗ giữa rừng thông với không gian yên tĩnh và trong lành.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Lò sưởi',
      'BBQ',
      'Cắm trại',
      'Đạp xe',
      'Tour thác',
      'Cafe vườn'
    ],
    host: {
      name: 'Anh Tuấn',
      avatar: 'https://picsum.photos/seed/host37/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 11.937_890,
      lng: 108.456_789
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 150000,
    serviceFee: 80000
  },
  {
    id: '38',
    name: 'Căn hộ D\'-Le Roi Soleil',
    location: 'Hà Nội',
    price: 2800000,
    pricePerNight: 2800000,
    squareMeters: 110,
    image: 'https://picsum.photos/seed/room38/800/600',
    images: [
      'https://picsum.photos/seed/room38-1/800/600',
      'https://picsum.photos/seed/room38-2/800/600',
      'https://picsum.photos/seed/room38-3/800/600'
    ],
    rating: 4.95,
    numReviews: 167,
    description: 'Căn hộ cao cấp view Hồ Tây với thiết kế Tân cổ điển Pháp.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Wine bar',
      'Nhà hàng Pháp',
      'Concierge'
    ],
    host: {
      name: 'Quỳnh Chi',
      avatar: 'https://picsum.photos/seed/host38/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.056_789,
      lng: 105.823_456
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '39',
    name: 'Biệt thự FLC Quy Nhơn',
    location: 'Quy Nhơn',
    price: 4000000,
    pricePerNight: 4000000,
    squareMeters: 220,
    image: 'https://picsum.photos/seed/room39/800/600',
    images: [
      'https://picsum.photos/seed/room39-1/800/600',
      'https://picsum.photos/seed/room39-2/800/600',
      'https://picsum.photos/seed/room39-3/800/600'
    ],
    rating: 4.96,
    numReviews: 134,
    description: 'Biệt thự sang trọng trong quần thể resort 5 sao với view biển tuyệt đẹp.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Golf',
      'Tennis',
      'Spa',
      'Nhà hàng',
      'Bãi biển riêng'
    ],
    host: {
      name: 'Hoàng Long',
      avatar: 'https://picsum.photos/seed/host39/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 13.756_789,
      lng: 109.223_456
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '40',
    name: 'Căn hộ Vinhomes Golden River',
    location: 'Hồ Chí Minh',
    price: 3000000,
    pricePerNight: 3000000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room40/800/600',
    images: [
      'https://picsum.photos/seed/room40-1/800/600',
      'https://picsum.photos/seed/room40-2/800/600',
      'https://picsum.photos/seed/room40-3/800/600'
    ],
    rating: 4.93,
    numReviews: 156,
    description: 'Căn hộ cao cấp view sông Sài Gòn tại trung tâm Quận 1.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'BBQ',
      'Công viên',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Minh Thư',
      avatar: 'https://picsum.photos/seed/host40/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.786_789,
      lng: 106.705_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '41',
    name: 'Căn hộ Panorama Đà Lạt',
    location: 'Đà Lạt',
    price: 2200000,
    pricePerNight: 2200000,
    squareMeters: 80,
    image: 'https://picsum.photos/seed/room41/800/600',
    images: [
      'https://picsum.photos/seed/room41-1/800/600',
      'https://picsum.photos/seed/room41-2/800/600',
      'https://picsum.photos/seed/room41-3/800/600'
    ],
    rating: 4.89,
    numReviews: 178,
    description: 'Căn hộ view toàn cảnh thành phố Đà Lạt và rừng thông.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Ban công',
      'Lò sưởi',
      'BBQ',
      'Cafe',
      'Đạp xe',
      'Tour thành phố'
    ],
    host: {
      name: 'Thanh Hà',
      avatar: 'https://picsum.photos/seed/host41/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 11.945_678,
      lng: 108.445_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '42',
    name: 'Biệt thự Vinpearl Phú Quốc',
    location: 'Phú Quốc',
    price: 5500000,
    pricePerNight: 5500000,
    squareMeters: 280,
    image: 'https://picsum.photos/seed/room42/800/600',
    images: [
      'https://picsum.photos/seed/room42-1/800/600',
      'https://picsum.photos/seed/room42-2/800/600',
      'https://picsum.photos/seed/room42-3/800/600'
    ],
    rating: 4.97,
    numReviews: 145,
    description: 'Biệt thự sang trọng với bãi biển riêng tại Bãi Dài.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Bãi biển riêng',
      'Golf',
      'Spa',
      'Casino',
      'Safari'
    ],
    host: {
      name: 'Quốc Việt',
      avatar: 'https://picsum.photos/seed/host42/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.289_456,
      lng: 103.984_567
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 500000,
    serviceFee: 250000
  },
  {
    id: '43',
    name: 'Căn hộ Vinhomes Marina',
    location: 'Hải Phòng',
    price: 1900000,
    pricePerNight: 1900000,
    squareMeters: 75,
    image: 'https://picsum.photos/seed/room43/800/600',
    images: [
      'https://picsum.photos/seed/room43-1/800/600',
      'https://picsum.photos/seed/room43-2/800/600',
      'https://picsum.photos/seed/room43-3/800/600'
    ],
    rating: 4.88,
    numReviews: 134,
    description: 'Căn hộ hiện đại view vịnh Hạ Long, nội thất cao cấp.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Công viên',
      'Bến du thuyền',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Minh Khang',
      avatar: 'https://picsum.photos/seed/host43/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 20.836_789,
      lng: 106.995_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 180000,
    serviceFee: 90000
  },
  {
    id: '44',
    name: 'Biệt thự Hội An Riverside',
    location: 'Hội An',
    price: 3200000,
    pricePerNight: 3200000,
    squareMeters: 180,
    image: 'https://picsum.photos/seed/room44/800/600',
    images: [
      'https://picsum.photos/seed/room44-1/800/600',
      'https://picsum.photos/seed/room44-2/800/600',
      'https://picsum.photos/seed/room44-3/800/600'
    ],
    rating: 4.95,
    numReviews: 167,
    description: 'Biệt thự phong cách Đông Dương bên sông Thu Bồn.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Vườn',
      'BBQ',
      'Xe đạp',
      'Tour phố cổ',
      'Lớp nấu ăn'
    ],
    host: {
      name: 'Thu Trang',
      avatar: 'https://picsum.photos/seed/host44/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 15.877_890,
      lng: 108.326_789
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '45',
    name: 'Căn hộ Mipec Riverside',
    location: 'Hà Nội',
    price: 2100000,
    pricePerNight: 2100000,
    squareMeters: 90,
    image: 'https://picsum.photos/seed/room45/800/600',
    images: [
      'https://picsum.photos/seed/room45-1/800/600',
      'https://picsum.photos/seed/room45-2/800/600',
      'https://picsum.photos/seed/room45-3/800/600'
    ],
    rating: 4.92,
    numReviews: 145,
    description: 'Căn hộ cao cấp view sông Hồng với nội thất sang trọng.',
    maxGuests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Tennis',
      'Nhà hàng',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Hoàng Nam',
      avatar: 'https://picsum.photos/seed/host45/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.023_456,
      lng: 105.856_789
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '46',
    name: 'Biệt thự Tam Đảo Golf Resort',
    location: 'Vĩnh Phúc',
    price: 4500000,
    pricePerNight: 4500000,
    squareMeters: 250,
    image: 'https://picsum.photos/seed/room46/800/600',
    images: [
      'https://picsum.photos/seed/room46-1/800/600',
      'https://picsum.photos/seed/room46-2/800/600',
      'https://picsum.photos/seed/room46-3/800/600'
    ],
    rating: 4.96,
    numReviews: 156,
    description: 'Biệt thự sang trọng trong quần thể sân golf với view núi tuyệt đẹp.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Golf',
      'Tennis',
      'Spa',
      'Nhà hàng',
      'Phòng xông hơi'
    ],
    host: {
      name: 'Quang Dũng',
      avatar: 'https://picsum.photos/seed/host46/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.456_789,
      lng: 105.645_678
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '47',
    name: 'Căn hộ Watermark Westlake',
    location: 'Hà Nội',
    price: 3800000,
    pricePerNight: 3800000,
    squareMeters: 120,
    image: 'https://picsum.photos/seed/room47/800/600',
    images: [
      'https://picsum.photos/seed/room47-1/800/600',
      'https://picsum.photos/seed/room47-2/800/600',
      'https://picsum.photos/seed/room47-3/800/600'
    ],
    rating: 4.94,
    numReviews: 178,
    description: 'Căn hộ cao cấp view Hồ Tây với thiết kế hiện đại sang trọng.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Wine bar',
      'Nhà hàng Âu',
      'Concierge'
    ],
    host: {
      name: 'Mai Linh',
      avatar: 'https://picsum.photos/seed/host47/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.058_901,
      lng: 105.823_456
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 350000,
    serviceFee: 180000
  },
  {
    id: '48',
    name: 'Nhà vườn Mê Linh',
    location: 'Hà Nội',
    price: 2500000,
    pricePerNight: 2500000,
    squareMeters: 300,
    image: 'https://picsum.photos/seed/room48/800/600',
    images: [
      'https://picsum.photos/seed/room48-1/800/600',
      'https://picsum.photos/seed/room48-2/800/600',
      'https://picsum.photos/seed/room48-3/800/600'
    ],
    rating: 4.87,
    numReviews: 134,
    description: 'Nhà vườn rộng rãi với không gian xanh và hồ cá Koi.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Vườn Nhật',
      'Hồ cá Koi',
      'BBQ',
      'Sân tennis',
      'Nhà hàng',
      'Karaoke'
    ],
    host: {
      name: 'Anh Tuấn',
      avatar: 'https://picsum.photos/seed/host48/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 21.123_456,
      lng: 105.734_567
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '49',
    name: 'Căn hộ The Matrix One',
    location: 'Hà Nội',
    price: 2200000,
    pricePerNight: 2200000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room49/800/600',
    images: [
      'https://picsum.photos/seed/room49-1/800/600',
      'https://picsum.photos/seed/room49-2/800/600',
      'https://picsum.photos/seed/room49-3/800/600'
    ],
    rating: 4.91,
    numReviews: 145,
    description: 'Căn hộ thông minh với view panorama thành phố.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Rooftop bar',
      'Smart home',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Thanh Thảo',
      avatar: 'https://picsum.photos/seed/host49/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 21.016_789,
      lng: 105.789_012
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  },
  {
    id: '50',
    name: 'Biệt thự The Harmony Resort',
    location: 'Hòa Bình',
    price: 6000000,
    pricePerNight: 6000000,
    squareMeters: 400,
    image: 'https://picsum.photos/seed/room50/800/600',
    images: [
      'https://picsum.photos/seed/room50-1/800/600',
      'https://picsum.photos/seed/room50-2/800/600',
      'https://picsum.photos/seed/room50-3/800/600'
    ],
    rating: 4.98,
    numReviews: 167,
    description: 'Biệt thự nghỉ dưỡng cao cấp với view núi và thác nước riêng.',
    maxGuests: 12,
    bedrooms: 6,
    beds: 6,
    bathrooms: 5,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi vô cực',
      'Thác nước',
      'Spa',
      'Yoga studio',
      'Nhà hàng hữu cơ',
      'Helipad'
    ],
    host: {
      name: 'Gia Bảo',
      avatar: 'https://picsum.photos/seed/host50/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.812_345,
      lng: 105.345_678
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 600000,
    serviceFee: 300000
  },
  {
    id: '51',
    name: 'Căn hộ Sun Marina Town',
    location: 'Hạ Long',
    price: 2800000,
    pricePerNight: 2800000,
    squareMeters: 95,
    image: 'https://picsum.photos/seed/room51/800/600',
    images: [
      'https://picsum.photos/seed/room51-1/800/600',
      'https://picsum.photos/seed/room51-2/800/600',
      'https://picsum.photos/seed/room51-3/800/600'
    ],
    rating: 4.93,
    numReviews: 156,
    description: 'Căn hộ cao cấp view vịnh Hạ Long với nội thất sang trọng.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi vô cực',
      'Gym',
      'Spa',
      'Bar',
      'Tour vịnh',
      'Dịch vụ phòng'
    ],
    host: {
      name: 'Minh Quân',
      avatar: 'https://picsum.photos/seed/host51/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.958_901,
      lng: 107.045_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '52',
    name: 'Biệt thự Banyan Tree Lăng Cô',
    location: 'Huế',
    price: 8500000,
    pricePerNight: 8500000,
    squareMeters: 350,
    image: 'https://picsum.photos/seed/room52/800/600',
    images: [
      'https://picsum.photos/seed/room52-1/800/600',
      'https://picsum.photos/seed/room52-2/800/600',
      'https://picsum.photos/seed/room52-3/800/600'
    ],
    rating: 4.99,
    numReviews: 189,
    description: 'Biệt thự sang trọng bậc nhất với bãi biển riêng tại Lăng Cô.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Golf',
      'Spa',
      'Nhà hàng Michelin',
      'Bãi biển riêng',
      'Butler'
    ],
    host: {
      name: 'Quốc Bảo',
      avatar: 'https://picsum.photos/seed/host52/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 16.234_567,
      lng: 108.123_456
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 800000,
    serviceFee: 400000
  },
  {
    id: '53',
    name: 'Căn hộ The Marq',
    location: 'Hồ Chí Minh',
    price: 4200000,
    pricePerNight: 4200000,
    squareMeters: 130,
    image: 'https://picsum.photos/seed/room53/800/600',
    images: [
      'https://picsum.photos/seed/room53-1/800/600',
      'https://picsum.photos/seed/room53-2/800/600',
      'https://picsum.photos/seed/room53-3/800/600'
    ],
    rating: 4.95,
    numReviews: 145,
    description: 'Căn hộ siêu sang tại trung tâm Quận 1 với nội thất cao cấp.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Wine cellar',
      'Cigar lounge',
      'Concierge'
    ],
    host: {
      name: 'Thành Đạt',
      avatar: 'https://picsum.photos/seed/host53/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.778_901,
      lng: 106.701_234
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '54',
    name: 'Biệt thự Sakana Resort',
    location: 'Hòa Bình',
    price: 3500000,
    pricePerNight: 3500000,
    squareMeters: 200,
    image: 'https://picsum.photos/seed/room54/800/600',
    images: [
      'https://picsum.photos/seed/room54-1/800/600',
      'https://picsum.photos/seed/room54-2/800/600',
      'https://picsum.photos/seed/room54-3/800/600'
    ],
    rating: 4.92,
    numReviews: 167,
    description: 'Biệt thự nghỉ dưỡng phong cách Nhật với onsen riêng.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Onsen riêng',
      'Vườn Zen',
      'Nhà hàng Nhật',
      'Trà đạo',
      'Massage',
      'Karaoke'
    ],
    host: {
      name: 'Thu Hằng',
      avatar: 'https://picsum.photos/seed/host54/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.817_890,
      lng: 105.345_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '55',
    name: 'Căn hộ The River Thu Thiem',
    location: 'Hồ Chí Minh',
    price: 3800000,
    pricePerNight: 3800000,
    squareMeters: 110,
    image: 'https://picsum.photos/seed/room55/800/600',
    images: [
      'https://picsum.photos/seed/room55-1/800/600',
      'https://picsum.photos/seed/room55-2/800/600',
      'https://picsum.photos/seed/room55-3/800/600'
    ],
    rating: 4.94,
    numReviews: 178,
    description: 'Căn hộ cao cấp view sông Sài Gòn tại Thủ Thiêm.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'Sky bar',
      'BBQ',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Quang Minh',
      avatar: 'https://picsum.photos/seed/host55/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.776_789,
      lng: 106.723_456
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 350000,
    serviceFee: 180000
  },
  {
    id: '56',
    name: 'Biệt thự Legacy Hill',
    location: 'Hòa Bình',
    price: 4500000,
    pricePerNight: 4500000,
    squareMeters: 280,
    image: 'https://picsum.photos/seed/room56/800/600',
    images: [
      'https://picsum.photos/seed/room56-1/800/600',
      'https://picsum.photos/seed/room56-2/800/600',
      'https://picsum.photos/seed/room56-3/800/600'
    ],
    rating: 4.96,
    numReviews: 145,
    description: 'Biệt thự nghỉ dưỡng với view đồi và hồ nước.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Tennis',
      'Spa',
      'BBQ',
      'Vườn treo',
      'Phòng chiếu phim'
    ],
    host: {
      name: 'Hoàng Anh',
      avatar: 'https://picsum.photos/seed/host56/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 20.819_567,
      lng: 105.367_890
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 400000,
    serviceFee: 200000
  },
  {
    id: '57',
    name: 'Căn hộ Diamond Island',
    location: 'Hồ Chí Minh',
    price: 3200000,
    pricePerNight: 3200000,
    squareMeters: 100,
    image: 'https://picsum.photos/seed/room57/800/600',
    images: [
      'https://picsum.photos/seed/room57-1/800/600',
      'https://picsum.photos/seed/room57-2/800/600',
      'https://picsum.photos/seed/room57-3/800/600'
    ],
    rating: 4.93,
    numReviews: 167,
    description: 'Căn hộ cao cấp trên đảo Kim Cương với view sông.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'BBQ',
      'Sân chơi',
      'Bến du thuyền'
    ],
    host: {
      name: 'Minh Tâm',
      avatar: 'https://picsum.photos/seed/host57/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.778_901,
      lng: 106.745_678
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 300000,
    serviceFee: 150000
  },
  {
    id: '58',
    name: 'Biệt thự Sunset Villas',
    location: 'Phú Quốc',
    price: 7500000,
    pricePerNight: 7500000,
    squareMeters: 320,
    image: 'https://picsum.photos/seed/room58/800/600',
    images: [
      'https://picsum.photos/seed/room58-1/800/600',
      'https://picsum.photos/seed/room58-2/800/600',
      'https://picsum.photos/seed/room58-3/800/600'
    ],
    rating: 4.97,
    numReviews: 189,
    description: 'Biệt thự hướng biển với hồ bơi vô cực và bãi biển riêng.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi vô cực',
      'Bãi biển riêng',
      'Spa',
      'BBQ',
      'Bar',
      'Butler'
    ],
    host: {
      name: 'Quang Huy',
      avatar: 'https://picsum.photos/seed/host58/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.289_567,
      lng: 103.984_567
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 700000,
    serviceFee: 350000
  },
  {
    id: '59',
    name: 'Căn hộ Central Residence',
    location: 'Đà Nẵng',
    price: 2500000,
    pricePerNight: 2500000,
    squareMeters: 85,
    image: 'https://picsum.photos/seed/room59/800/600',
    images: [
      'https://picsum.photos/seed/room59-1/800/600',
      'https://picsum.photos/seed/room59-2/800/600',
      'https://picsum.photos/seed/room59-3/800/600'
    ],
    rating: 4.91,
    numReviews: 156,
    description: 'Căn hộ cao cấp view biển Mỹ Khê và cầu Rồng.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Spa',
      'BBQ',
      'Công viên',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Thu Thảo',
      avatar: 'https://picsum.photos/seed/host59/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 16.047_890,
      lng: 108.234_567
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '60',
    name: 'Biệt thự Emerald Bay',
    location: 'Nha Trang',
    price: 6500000,
    pricePerNight: 6500000,
    squareMeters: 300,
    image: 'https://picsum.photos/seed/room60/800/600',
    images: [
      'https://picsum.photos/seed/room60-1/800/600',
      'https://picsum.photos/seed/room60-2/800/600',
      'https://picsum.photos/seed/room60-3/800/600'
    ],
    rating: 4.98,
    numReviews: 178,
    description: 'Biệt thự sang trọng với view vịnh Nha Trang tuyệt đẹp.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 4,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Gym',
      'Spa',
      'Wine cellar',
      'Bãi biển riêng',
      'Helipad'
    ],
    host: {
      name: 'Gia Huy',
      avatar: 'https://picsum.photos/seed/host60/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 12.235_678,
      lng: 109.196_789
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 600000,
    serviceFee: 300000
  },
  {
    id: '61',
    name: 'Căn hộ Sky Villa',
    location: 'Đà Nẵng',
    price: 5500000,
    pricePerNight: 5500000,
    squareMeters: 150,
    image: 'https://picsum.photos/seed/room61/800/600',
    images: [
      'https://picsum.photos/seed/room61-1/800/600',
      'https://picsum.photos/seed/room61-2/800/600',
      'https://picsum.photos/seed/room61-3/800/600'
    ],
    rating: 4.96,
    numReviews: 167,
    description: 'Penthouse sang trọng với view toàn cảnh thành phố và biển.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Gym',
      'Spa',
      'Bar',
      'BBQ',
      'Butler'
    ],
    host: {
      name: 'Quang Dũng',
      avatar: 'https://picsum.photos/seed/host61/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 16.048_901,
      lng: 108.234_567
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 500000,
    serviceFee: 250000
  },
  {
    id: '62',
    name: 'Biệt thự Zen Garden',
    location: 'Đà Lạt',
    price: 4800000,
    pricePerNight: 4800000,
    squareMeters: 220,
    image: 'https://picsum.photos/seed/room62/800/600',
    images: [
      'https://picsum.photos/seed/room62-1/800/600',
      'https://picsum.photos/seed/room62-2/800/600',
      'https://picsum.photos/seed/room62-3/800/600'
    ],
    rating: 4.95,
    numReviews: 145,
    description: 'Biệt thự phong cách Nhật với vườn thiền và suối nước.',
    maxGuests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 3,
    amenities: [
      'Wifi',
      'Bếp',
      'Onsen',
      'Vườn thiền',
      'Trà đạo',
      'Yoga',
      'Massage',
      'Phòng thiền'
    ],
    host: {
      name: 'Thanh Mai',
      avatar: 'https://picsum.photos/seed/host62/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 11.946_789,
      lng: 108.445_678
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 450000,
    serviceFee: 220000
  },
  {
    id: '63',
    name: 'Căn hộ Ocean Vista',
    location: 'Phan Thiết',
    price: 2800000,
    pricePerNight: 2800000,
    squareMeters: 95,
    image: 'https://picsum.photos/seed/room63/800/600',
    images: [
      'https://picsum.photos/seed/room63-1/800/600',
      'https://picsum.photos/seed/room63-2/800/600',
      'https://picsum.photos/seed/room63-3/800/600'
    ],
    rating: 4.89,
    numReviews: 178,
    description: 'Căn hộ cao cấp view biển tại Sea Links City.',
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'Golf',
      'Tennis',
      'Bãi biển',
      'BBQ'
    ],
    host: {
      name: 'Minh Hiếu',
      avatar: 'https://picsum.photos/seed/host63/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 10.934_567,
      lng: 108.287_890
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 250000,
    serviceFee: 120000
  },
  {
    id: '64',
    name: 'Biệt thự The Dune',
    location: 'Phan Thiết',
    price: 8500000,
    pricePerNight: 8500000,
    squareMeters: 350,
    image: 'https://picsum.photos/seed/room64/800/600',
    images: [
      'https://picsum.photos/seed/room64-1/800/600',
      'https://picsum.photos/seed/room64-2/800/600',
      'https://picsum.photos/seed/room64-3/800/600'
    ],
    rating: 4.97,
    numReviews: 156,
    description: 'Biệt thự sang trọng trên đồi cát với view biển tuyệt đẹp.',
    maxGuests: 10,
    bedrooms: 5,
    beds: 5,
    bathrooms: 5,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi riêng',
      'Spa',
      'Bar',
      'BBQ',
      'Bãi biển riêng',
      'Butler'
    ],
    host: {
      name: 'Quốc Khánh',
      avatar: 'https://picsum.photos/seed/host64/64/64',
      isSuperHost: true
    },
    coordinates: {
      lat: 10.935_678,
      lng: 108.288_901
    },
    instantBook: false,
    cancellationPolicy: 'Nghiêm ngặt',
    cleaningFee: 800000,
    serviceFee: 400000
  },
  {
    id: '65',
    name: 'Căn hộ The Sailing',
    location: 'Quy Nhơn',
    price: 2200000,
    pricePerNight: 2200000,
    squareMeters: 80,
    image: 'https://picsum.photos/seed/room65/800/600',
    images: [
      'https://picsum.photos/seed/room65-1/800/600',
      'https://picsum.photos/seed/room65-2/800/600',
      'https://picsum.photos/seed/room65-3/800/600'
    ],
    rating: 4.92,
    numReviews: 134,
    description: 'Căn hộ hiện đại view vịnh Quy Nhơn tuyệt đẹp.',
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      'Wifi',
      'Bếp',
      'Hồ bơi',
      'Gym',
      'BBQ',
      'Công viên',
      'Bãi biển',
      'Bảo vệ 24/7'
    ],
    host: {
      name: 'Thu Hương',
      avatar: 'https://picsum.photos/seed/host65/64/64',
      isSuperHost: false
    },
    coordinates: {
      lat: 13.756_789,
      lng: 109.223_456
    },
    instantBook: true,
    cancellationPolicy: 'Linh hoạt',
    cleaningFee: 200000,
    serviceFee: 100000
  }
]; 