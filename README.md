# Airbnb Clone - Modern Structure

## Cấu trúc thư mục

- `app/`: Các page chính (Next.js)
- `components/`: UI components (atoms, molecules, organisms, templates)
- `features/`: Logic và UI theo domain (rooms, bookings, users)
- `mocks/`: Mock API (MSW)
- `lib/`: Tiện ích, config
- `stores/`: State management
- `styles/`: Global style, theme

## Roadmap
1. Thiết kế lại cấu trúc thư mục hiện đại
2. Tạo mock API với MSW
3. Xây dựng các component UI chính (RoomCard, RoomList, ...)
4. Xây dựng các page chính (Home, Room Detail, Booking)
5. Kết nối UI với mock API
6. Tối ưu UI/UX với Tailwind CSS

# Nextjs Project

## 1. Cấu trúc thư mục dự án

```
/components
  /atoms
    /Button
      Button.tsx
      Button.module.css
      Button.stories.tsx
      Button.test.tsx
    /Input
      Input.tsx
      Input.module.css
      Input.stories.tsx
      Input.test.tsx
    ...
  /molecules
    /ProductCard
      ProductCard.tsx
      ProductCard.stories.tsx
      ProductCard.test.tsx
    ...
  /organisms
    /Header
      Header.tsx
      Header.stories.tsx
      Header.test.tsx
    ...
/app
  index.tsx
  _app.tsx
  ...
/public
  /images
    ...
/styles
  globals.css
  ...
/utils
  cn.ts
  ...
/jest.config.ts
/jest.setup.ts
/tsconfig.json
/next.config.ts
/package.json
/README.md
```

---

## 2. Kiến thức về Atomic Design

**Atomic Design** là một phương pháp luận để xây dựng giao diện người dùng theo hướng module, giúp tái sử dụng code, dễ bảo trì và mở rộng. Nó chia UI thành 5 cấp độ:

### 2.1. Atoms
- Thành phần nhỏ nhất, không thể chia nhỏ hơn (button, input, label, icon, ...).
- Đơn giản, không phụ thuộc vào các thành phần khác.

### 2.2. Molecules
- Kết hợp nhiều atom để tạo thành một khối chức năng nhỏ (ví dụ: Input + Label + ErrorMessage).
- Đảm nhận một chức năng cụ thể.

### 2.3. Organisms
- Kết hợp nhiều molecule và atom, tạo thành một phần giao diện phức tạp hơn (ví dụ: Header, Footer, ProductList).
- Có thể chứa logic và layout riêng.

### 2.4. Templates
- Định nghĩa bố cục tổng thể của trang, sắp xếp các organism, molecule, atom vào đúng vị trí.
- Chưa chứa dữ liệu thực tế, chỉ là khung.

### 2.5. Pages
- Là instance cụ thể của template với dữ liệu thực tế.
- Thường là các file trong thư mục `/pages` của Next.js.

---

## 3. Cách phân chia và sử dụng trong dự án

- **Atoms**:  Đặt trong `/components/atoms/`.  
  Ví dụ: `Button`, `Input`, `Label`, `Badge`, `Icon`,...
- **Molecules**:  Đặt trong `/components/molecules/`.  
  Ví dụ: `ProductCard` (gồm ảnh, tên, giá, nút mua), `FormField` (label + input + error),...
- **Organisms**:  Đặt trong `/components/organisms/`.  
  Ví dụ: `Header`, `Footer`, `ProductGrid`, `CartSummary`,...
- **Templates**:  Đặt trong `/components/templates/`.  
  Ví dụ: `ProductListTemplate`, `CartTemplate`, `CheckoutTemplate`,...
- **Pages**:  Đặt trong `/pages/` (theo chuẩn Next.js).  
  Ví dụ: `index.tsx`, `cart.tsx`, `checkout.tsx`,...

### **Cách sử dụng**

- Khi xây dựng UI, hãy bắt đầu từ atom → molecule → organism → template → page.
- Luôn ưu tiên tái sử dụng atom và molecule trong các thành phần lớn hơn.
- Mỗi component nên có file test (`.test.tsx`) và storybook (`.stories.tsx`) để dễ kiểm thử và phát triển.
- Khi cần sửa đổi UI, chỉ cần thay đổi ở atom/molecule, các thành phần lớn hơn sẽ tự động cập nhật.

#### **Ví dụ cụ thể**
- **Atom**: `Input` chỉ nhận props và render một `<input />` đơn giản.
- **Molecule**: `FormField` kết hợp `Label` + `Input` + `ErrorMessage`.
- **Organism**: `ProductCard` kết hợp ảnh, tên, giá, nút mua (có thể dùng lại trong nhiều template).
- **Template**: `ProductListTemplate` sắp xếp nhiều `ProductCard` thành lưới.
- **Page**: `/pages/index.tsx` sử dụng `ProductListTemplate` và truyền dữ liệu thực tế.

---

## 4. Lợi ích của Atomic Design

- **Tái sử dụng cao**: Các thành phần nhỏ có thể dùng lại ở nhiều nơi.
- **Dễ bảo trì**: Sửa một chỗ, hiệu ứng lan tỏa toàn bộ hệ thống.
- **Phát triển nhanh**: Có thể phát triển song song các thành phần nhỏ.
- **Kiểm thử dễ dàng**: Test từng phần nhỏ, giảm lỗi khi tích hợp.

---

## 5. Hướng dẫn phát triển

- Chạy Storybook:  
  ```bash
  npm run storybook
  ```
- Chạy test:  
  ```bash
  npm test
  ```
- Build production:  
  ```bash
  npm run build
  ```

---

## 6. Quy tắc phát triển cho thành viên trong team

### 6.1. Quy tắc phát triển code
- **Tuân thủ cấu trúc Atomic Design**: Luôn phân chia component đúng cấp độ (atom, molecule, organism, template, page).
- **Đặt tên rõ ràng**: Tên file, tên component, props phải rõ nghĩa, nhất quán.
- **Sử dụng TypeScript**: Luôn định nghĩa type cho props, tránh dùng kiểu `any`.
- **Tái sử dụng component**: Ưu tiên dùng lại atom/molecule thay vì tạo mới.
- **Không để code thừa**: Xóa code/comment không dùng đến.
- **Chia nhỏ commit**: Mỗi commit nên giải quyết một vấn đề nhỏ, ghi chú rõ ràng.
- **Review code**: Luôn tạo pull request và nhờ review trước khi merge vào nhánh chính.

### 6.2. Viết unit test với Testing Library
- **Mỗi component phải có file test**: Ví dụ, `Button.tsx` thì có `Button.test.tsx` cùng thư mục.
- **Test các trường hợp chính**: Render, event, props, trạng thái disabled, ...
- **Không test logic của thư viện**: Chỉ test logic của component mình viết.
- **Chạy test trước khi push code**: Đảm bảo tất cả test đều pass.
- **Ví dụ test đơn giản**:
  ```tsx
  import { render, screen } from '@testing-library/react'
  import { Button } from './Button'

  test('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  ```

### 6.3. Viết Storybook
- **Mỗi component phải có file story**: Ví dụ, `Button.tsx` thì có `Button.stories.tsx` cùng thư mục.
- **Story phải cover các trạng thái chính**: Default, disabled, loading, ...
- **Sử dụng args để dễ kiểm thử**:
  ```tsx
  import type { Meta, StoryObj } from '@storybook/react'
  import { Button } from './Button'

  const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
  }
  export default meta
  type Story = StoryObj<typeof Button>

  export const Default: Story = {
    args: {
      children: 'Click me',
    },
  }
  ```
- **Chạy Storybook để kiểm tra giao diện**: `npm run storybook`

### 6.4. Quy trình merge code
1. Tạo branch mới từ `main` hoặc `develop`.
2. Phát triển tính năng/bugfix trên branch riêng.
3. Viết test, storybook cho component mới hoặc sửa đổi.
4. Đảm bảo pass toàn bộ test (`npm test`).
5. Tạo pull request, mô tả rõ thay đổi.
6. Được review và approved mới được merge.

---

## 7. Tài liệu tham khảo
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Testing Library Docs](https://testing-library.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 8. Hướng dẫn sử dụng biến môi trường (Environment Variables)

### 8.1. Đặt biến môi trường ở đâu?
- Tạo file `.env.local` ở thư mục gốc dự án để lưu các biến môi trường riêng cho từng máy.
- Có thể có thêm `.env`, `.env.development`, `.env.production` cho từng môi trường cụ thể.

### 8.2. Quy tắc sử dụng biến môi trường trong Next.js
- **Biến môi trường chỉ dùng ở server:**
  - Đặt tên bình thường, ví dụ: `DATABASE_URL`, `SECRET_KEY`, ...
  - Chỉ truy cập được ở phía server (API routes, getServerSideProps, getStaticProps, ...).
- **Biến môi trường dùng ở client:**
  - Bắt buộc phải có prefix `NEXT_PUBLIC_`, ví dụ: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`, ...
  - Chỉ những biến có prefix này mới được Next.js expose ra phía client/browser.

### 8.3. Cách sử dụng trong code
- Đọc biến môi trường bằng `process.env`:
  ```ts
  // Chỉ dùng được ở server
  const dbUrl = process.env.DATABASE_URL

  // Dùng được ở cả client và server
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ```
- **Lưu ý:** Không destructure trực tiếp từ `process.env` (vì sẽ bị undefined khi build):
  ```ts
  // Sai
  const { NEXT_PUBLIC_API_URL } = process.env
  // Đúng
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ```

### 8.4. Lưu ý bảo mật
- **Không bao giờ** để lộ biến môi trường nhạy cảm (token, secret, database, ...) ra phía client.
- Chỉ những biến có prefix `NEXT_PUBLIC_` mới được dùng ở client.
- Không commit file `.env.local` lên git (đã có trong `.gitignore`).

### 8.5. Ví dụ file `.env.local`
```
DATABASE_URL=postgres://user:pass@localhost:5432/db
SECRET_KEY=supersecret
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXX
```

---

Nếu có thắc mắc về biến môi trường, hãy hỏi leader hoặc tham khảo tài liệu Next.js: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

Nếu có thắc mắc hoặc cần hỗ trợ, hãy liên hệ leader hoặc người phụ trách dự án.

---

## 9. Sử dụng lib/env.ts để truy cập biến môi trường

Để đơn giản hóa và đảm bảo an toàn khi truy cập biến môi trường, dự án đã cung cấp file `lib/env.ts` với 2 object:
- `serverEnv`: Dùng cho biến môi trường phía server (không lộ ra client)
- `clientEnv`: Dùng cho biến môi trường phía client (bắt buộc NEXT_PUBLIC_)

### 9.1. Cách sử dụng

#### Truy cập biến môi trường phía server
```ts
import { serverEnv } from '@/lib/env'

const dbUrl = serverEnv.DATABASE_URL
const secret = serverEnv.API_SECRET_KEY
```
- Nếu thiếu biến môi trường bắt buộc, app sẽ throw lỗi ngay khi khởi động.

#### Truy cập biến môi trường phía client
```ts
import { clientEnv } from '@/lib/env'

const apiBase = clientEnv.NEXT_PUBLIC_API_BASE_URL
const siteName = clientEnv.NEXT_PUBLIC_SITE_NAME
```
- Nếu biến không tồn tại, sẽ trả về chuỗi rỗng `""` (an toàn cho client).

### 9.2. Lưu ý
- Chỉ import và sử dụng `serverEnv` trong code chạy phía server (API, getServerSideProps, ...).
- Chỉ sử dụng các biến có prefix `NEXT_PUBLIC_` trong `clientEnv` cho code phía client (component, hook, ...).
- Không destructure trực tiếp từ `process.env` nữa, luôn dùng qua `lib/env.ts` để đảm bảo an toàn và dễ kiểm soát.

### 9.3. Ví dụ thực tế

#### Ví dụ dùng trong API route (server):
```ts
// pages/api/hello.ts
import { serverEnv } from '@/lib/env'

export default function handler(req, res) {
  if (req.headers['x-api-key'] !== serverEnv.API_SECRET_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  // ...
}
```

#### Ví dụ dùng trong component (client):
```ts
// components/Footer.tsx
import { clientEnv } from '@/lib/env'

export function Footer() {
  return <div>API: {clientEnv.NEXT_PUBLIC_API_BASE_URL}</div>
}
```

---

Việc sử dụng `lib/env.ts` giúp code an toàn, dễ kiểm soát và tránh lỗi thiếu biến môi trường khi deploy.

---

## 10. Hướng dẫn deploy Next.js production với PM2 trên Linux

### 10.1. Yêu cầu
- Đã cài đặt Node.js (khuyến nghị >= 18)
- Đã cài đặt PM2 toàn cục: `npm install -g pm2`
- Đã clone source code lên server

### 10.2. Các bước deploy

1. **Cài đặt dependencies**
   ```bash
   npm install
   ```

2. **Cấu hình biến môi trường**
   - Tạo file `.env.local` (hoặc `.env.production`) và điền các biến cần thiết (xem hướng dẫn ở mục 8 và 9).

3. **Build ứng dụng**
   ```bash
   npm run build
   ```

4. **Chạy production với PM2**
   ```bash
   pm2 start ecosystem.config.js
   ```
   - PM2 sẽ tự động scale app theo số core CPU.
   - Log sẽ được lưu ở thư mục `./logs`.

5. **Kiểm tra trạng thái app**
   ```bash
   pm2 status
   pm2 logs nextjs-app
   ```

6. **Cấu hình tự khởi động lại khi reboot server**
   ```bash
   pm2 startup
   pm2 save
   ```

7. **Dừng hoặc restart app**
   ```bash
   pm2 restart nextjs-app
   pm2 stop nextjs-app
   pm2 delete nextjs-app
   ```

### 10.3. Lưu ý
- Luôn kiểm tra log khi gặp lỗi: `pm2 logs nextjs-app`
- Đảm bảo đã cấu hình biến môi trường đúng và đủ.
- Có thể dùng reverse proxy (Nginx, Caddy, ...) để trỏ domain về port 3000.
- Để bảo mật, chỉ expose các biến có prefix `NEXT_PUBLIC_` ra client.

---

Nếu cần hướng dẫn chi tiết hơn về deploy, hãy liên hệ leader hoặc tham khảo tài liệu chính thức của [Next.js](https://nextjs.org/docs/deployment) và [PM2](https://pm2.keymetrics.io/).

---

## 11. Thứ tự ưu tiên file biến môi trường trong Next.js

Next.js sẽ tự động đọc các file biến môi trường theo thứ tự ưu tiên khác nhau cho từng môi trường:

### 11.1. Khi chạy development (`npm run dev`)
| Thứ tự | Tên file                  |
|--------|--------------------------|
| 1      | `.env.development.local` |
| 2      | `.env.local`             |
| 3      | `.env.development`       |
| 4      | `.env`                   |

### 11.2. Khi chạy production (`npm run build` + `npm start` hoặc PM2)
| Thứ tự | Tên file                  |
|--------|--------------------------|
| 1      | `.env.production.local`  |
| 2      | `.env.local`             |
| 3      | `.env.production`        |
| 4      | `.env`                   |

**Lưu ý:**
- File có thứ tự cao hơn sẽ override biến cùng tên ở file thứ tự thấp hơn.
- `.env.local` KHÔNG nên commit lên git (dùng cho biến riêng từng máy).
- Nếu không có file cho môi trường cụ thể, Next.js sẽ fallback về `.env`.
- Không cần đổi tên file khi deploy, chỉ cần tạo đúng file cho từng môi trường.

---