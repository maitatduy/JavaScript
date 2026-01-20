# 3 cách tích hợp JavaScript vào trang web

## Tổng quan

Để JavaScript có thể hoạt động trên một trang web, ta cần **tích hợp (nhúng) JavaScript vào HTML**.  
Trong thực tế, có **3 cách chính** để tích hợp JavaScript, mỗi cách có mục đích và phạm vi sử dụng khác nhau.

Việc hiểu rõ 3 cách này giúp:

- Biết cách JavaScript được thực thi
- Tránh lỗi logic và lỗi tải file
- Viết code đúng chuẩn, dễ bảo trì

---

## 1. Inline JavaScript

### Khái niệm

Inline JavaScript là cách viết **mã JavaScript trực tiếp trong thuộc tính của thẻ HTML**, thường gắn với các sự kiện như
`onclick`, `onchange`, `onsubmit`, ...

### Cú pháp cơ bản

```html

<button onclick="alert('Hello JavaScript')">
    Click me
</button>
```

### Đặc điểm

- JavaScript nằm trực tiếp trong HTML
- Thường dùng cho các hành động rất đơn giản

### Ưu điểm

- Dễ hiểu, dễ viết
- Phù hợp cho ví dụ minh họa nhanh

### Nhược điểm

- Trộn lẫn HTML và JavaScript
- Khó bảo trì khi dự án lớn
- Không tái sử dụng được
- Không tuân theo nguyên tắc separation of concerns (Nguyên tắc thiết kế phần mềm, yêu cầu tách biệt các mối quan tâm (concerns) khác nhau của một hệ thống thành những phần độc lập, mỗi phần chỉ chịu trách nhiệm cho một vai trò rõ ràng.)

### Khi nào nên dùng?

- Demo nhanh
- Ví dụ học tập cơ bản
- Không khuyến nghị dùng trong dự án thực tế

---

## 2. Internal JavaScript (JavaScript nội bộ)

### Khái niệm

Internal JavaScript là cách viết mã JavaScript bên trong thẻ `<script>` của file HTML.

Thẻ `<script>` có thể đặt:

- Trong `<head>`
- Hoặc trước thẻ `</body>`

### Cú pháp cơ bản

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript</title>
    <script>
        function showMessage() {
            alert("Hello JavaScript");
        }
    </script>
</head>
<body>
<button onclick="showMessage()">Click</button>
</body>
</html>
```

### Đặc điểm

- JavaScript được viết chung trong file HTML
- Áp dụng cho toàn bộ trang

### Ưu điểm

- Dễ quản lý hơn Inline JavaScript
- Phù hợp cho trang web nhỏ hoặc học tập

### Nhược điểm

- JavaScript vẫn phụ thuộc vào HTML
- Không tái sử dụng cho nhiều trang
- File HTML trở nên dài và khó đọc

### Khi nào nên dùng?

- Trang web đơn giản
- Bài tập thực hành
- Prototype nhanh

---

## 3. External JavaScript (File JavaScript riêng)

### Khái niệm

External JavaScript là cách viết mã JavaScript trong file `.js` riêng, sau đó liên kết vào HTML thông qua thẻ
`<script>`.

Đây là cách làm tiêu chuẩn và được khuyến nghị trong thực tế.

### Cú pháp cơ bản

**HTML**

```html

<script src="main.js"></script>
```

**JavaScript (main.js)**

```javascript
console.log("Hello JavaScript");
```

### Đặc điểm

- Tách biệt hoàn toàn giữa HTML và JavaScript
- Có thể dùng chung cho nhiều trang

### Ưu điểm

- Code rõ ràng, dễ đọc, dễ bảo trì
- Dễ mở rộng và tái sử dụng
- Trình duyệt có thể cache file `.js` → tăng hiệu năng
- Tuân thủ nguyên tắc separation of concerns

### Nhược điểm

- Cần quản lý nhiều file
- Phải chú ý đúng đường dẫn file

### Khi nào nên dùng?

- Tất cả các dự án thực tế
- Website lớn
- Ứng dụng web
- Single Page Application

---

## 4. So sánh 3 cách tích hợp JavaScript

| Tiêu chí    | Inline         | Internal        | External         |
|-------------|----------------|-----------------|------------------|
| Vị trí code | Trong thẻ HTML | Trong file HTML | File `.js` riêng |
| Dễ bảo trì  | Thấp           | Trung bình      | Cao              |
| Tái sử dụng | Không          | Hạn chế         | Có               |
| Dự án lớn   | Không          | Không           | Có               |
| Khuyến nghị | Không          | Cân nhắc        | Nên dùng         |

---

## 5. Lưu ý quan trọng khi tích hợp JavaScript

### Vị trí đặt thẻ `<script>`

Nên đặt thẻ `<script>` trước `</body>` để tránh lỗi DOM chưa load

Hoặc sử dụng thuộc tính `defer`:

```html

<script src="main.js" defer></script>
```
---
