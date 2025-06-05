# Hướng dẫn đóng góp (CONTRIBUTING)

## 1. Quy tắc chung
- Tôn trọng cấu trúc thư mục và kiến trúc Atomic Design của dự án.
- Luôn làm việc trên branch riêng, không commit trực tiếp lên `main` hoặc `develop`.
- Mỗi pull request (PR) nên giải quyết một tính năng hoặc bug cụ thể, không gộp nhiều thay đổi lớn vào một PR.
- Đảm bảo code pass toàn bộ test và không làm hỏng storybook.
- Viết commit message rõ ràng, ngắn gọn, có ý nghĩa.

## 2. Quy trình phát triển
1. **Tạo branch mới** từ `main` hoặc `develop`:
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```
2. **Phát triển tính năng**:
   - Tạo mới hoặc chỉnh sửa component đúng cấp độ (atom, molecule, organism, template, page/app).
   - Viết test (`.test.tsx`) và storybook (`.stories.tsx`) cho component mới hoặc sửa đổi.
3. **Kiểm tra lại**:
   - Chạy test: `npm test`
   - Chạy storybook: `npm run storybook`
   - Đảm bảo không có lỗi lint, test fail hoặc storybook bị hỏng.
4. **Tạo pull request**:
   - Mô tả rõ thay đổi, ảnh hưởng, hướng dẫn test nếu cần.
   - Gắn label, reviewer phù hợp.
5. **Chờ review và approved** trước khi merge.

## 3. Quy tắc code và review
- Đặt tên file, tên component, props rõ ràng, nhất quán.
- Không để code/comment thừa, không dùng `any` nếu không thực sự cần thiết.
- Ưu tiên tái sử dụng atom/molecule thay vì tạo mới.
- Review kỹ các thay đổi về UI/logic, test và storybook phải đầy đủ.
- Không merge khi chưa được review hoặc test kỹ.

## 4. Viết test và storybook
- Mỗi component phải có file test và storybook cùng thư mục.
- Test các trường hợp chính: render, event, props, trạng thái đặc biệt.
- Storybook phải cover các trạng thái chính: default, disabled, loading, ...

## 5. Chia task cho team đông người với Atomic Design

### 5.1. Nguyên tắc chia task
- **Bắt đầu từ atom → molecule → organism → template → app/page**
- Chia task theo cấp độ component, tránh trùng lặp hoặc chồng chéo.
- Mỗi người/phân nhóm phụ trách một hoặc một nhóm component cùng cấp.
- Định nghĩa rõ interface (props) cho atom/molecule trước khi các cấp cao hơn sử dụng.
- Thường xuyên sync/trao đổi để thống nhất interface và tránh xung đột.

### 5.2. Ví dụ chia task
- **Nhóm 1:** Phát triển các atom (Button, Input, Label, Badge, ...)
- **Nhóm 2:** Phát triển các molecule (FormField, ProductCard, ...), sử dụng atom đã có.
- **Nhóm 3:** Phát triển organism (Header, Footer, ProductGrid, ...), sử dụng molecule và atom.
- **Nhóm 4:** Phát triển template và page/app, sử dụng organism, molecule, atom.

### 5.3. Lưu ý khi chia task
- Định nghĩa props và interface rõ ràng, có thể tạo file `types.ts` chung nếu cần.
- Đảm bảo các atom/molecule được merge trước khi các nhóm khác sử dụng.
- Thường xuyên review chéo giữa các nhóm để phát hiện sớm xung đột interface.
- Sử dụng Storybook để kiểm thử component độc lập trước khi tích hợp.

### 5.4. Gợi ý chia task theo level developer
- **Junior:**
  - Ưu tiên làm các atom đơn giản (Button, Input, Label, ...)
  - Tham gia viết test, storybook cho atom/molecule
  - Fix bug nhỏ, refactor code đơn giản
- **Middle:**
  - Phát triển molecule, một số organism đơn giản
  - Định nghĩa interface cho molecule, phối hợp với nhóm atom
  - Review code cho junior, hỗ trợ tích hợp test/storybook
- **Senior:**
  - Thiết kế, định hướng kiến trúc tổng thể (organism, template, app/page)
  - Định nghĩa chuẩn interface, review và approve PR
  - Xử lý các task phức tạp, tối ưu hiệu năng, bảo mật
  - Hỗ trợ, mentor các nhóm khác, giải quyết xung đột interface

> **Lưu ý:**
> - Có thể luân chuyển task giữa các level để học hỏi, nhưng nên ưu tiên đúng năng lực để đảm bảo tiến độ.
> - Senior nên chủ động review, định hướng và hỗ trợ các nhóm junior/middle.

## 6. Tài liệu tham khảo
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Testing Library Docs](https://testing-library.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

---

Nếu có thắc mắc hoặc cần hỗ trợ, hãy liên hệ leader hoặc người phụ trách dự án. 