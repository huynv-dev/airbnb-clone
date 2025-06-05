# Thư mục mocks

Chứa mock API sử dụng MSW (Mock Service Worker).

- `mocks/handlers/`: Định nghĩa các endpoint giả lập (rooms, bookings, users...)
- `mocks/data/`: Dữ liệu mẫu cho các endpoint
- `mocks/browser.ts`: Khởi tạo MSW cho môi trường browser

Dùng để phát triển frontend mà không cần backend thật. 