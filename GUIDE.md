# Airbnb Clone

Một dự án clone Airbnb sử dụng Next.js, Prisma và MongoDB.

## Cài đặt

```bash
npm install
```

## Cấu hình môi trường

Tạo file `.env` và thêm các biến môi trường:

```env
DATABASE_URL="your_mongodb_url"
NEXTAUTH_SECRET="your_nextauth_secret"

# OAuth providers
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Quản lý Database

### Khởi tạo và cập nhật schema

```bash
# Cập nhật schema database
npm run db:push

# Generate Prisma Client
npm run db:generate
```

### Quản lý dữ liệu

```bash
# Mở Prisma Studio để quản lý database
npm run db:studio

# Reset database (xóa tất cả dữ liệu)
npm run db:reset

# Tạo dữ liệu mẫu
npm run db:seed
```

## Development

```bash
# Chạy development server
npm run dev

# Build production
npm run build

# Chạy production server
npm run start

# Kiểm tra lỗi code
npm run lint
```

## API Endpoints

### Authentication

- `POST /api/register` - Đăng ký user mới
  ```json
  {
    "email": "user@example.com",
    "name": "User Name",
    "password": "password123"
  }
  ```

### Listings

- `POST /api/listings` - Tạo listing mới
  ```json
  {
    "title": "Beach House",
    "description": "Beautiful beach house",
    "imageSrc": "image_url",
    "category": "Beach",
    "roomCount": 3,
    "bathroomCount": 2,
    "guestCount": 6,
    "location": {
      "value": "US"
    },
    "price": 100
  }
  ```
- `DELETE /api/listings/{listingId}` - Xóa listing

### Reservations

- `POST /api/reservations` - Tạo reservation mới
  ```json
  {
    "listingId": "listing_id",
    "startDate": "2024-03-01T00:00:00.000Z",
    "endDate": "2024-03-05T00:00:00.000Z",
    "totalPrice": 500
  }
  ```
- `DELETE /api/reservations/{reservationId}` - Hủy reservation

### Favorites

- `POST /api/favorites/{listingId}` - Thêm listing vào danh sách yêu thích
- `DELETE /api/favorites/{listingId}` - Xóa listing khỏi danh sách yêu thích

## Cấu trúc thư mục

```
├── app/
│   ├── api/           # API routes
│   ├── components/    # React components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── providers/
│   └── pages/        # App pages
├── prisma/
│   └── schema.prisma # Database schema
├── public/          # Static files
└── types/           # TypeScript types
```
