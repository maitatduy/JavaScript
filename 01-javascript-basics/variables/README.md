# Biến trong JavaScript và Quy tắc đặt tên

## 1. Biến là gì?

**Biến (Variable)** là một vùng nhớ được đặt tên để lưu trữ dữ liệu trong chương trình. Biến cho phép chúng ta:

- Lưu trữ giá trị
- Truy xuất giá trị
- Thay đổi giá trị trong quá trình chạy

### Ví dụ minh họa

```javascript
let age = 25;           // Biến lưu số tuổi
let name = "John";      // Biến lưu tên
let isStudent = true;   // Biến lưu trạng thái
```

---

## 2. Các cách khai báo biến trong JavaScript

JavaScript có **3 cách khai báo biến**: `var`, `let`, `const`

### 2.1. Khai báo với `var` (Cách cũ - ES5)

```javascript
var username = "Alice";
var age = 30;
```

**Đặc điểm:**

- Có phạm vi function scope
- Có hiện tượng hoisting
- Có thể khai báo lại
- Không khuyến nghị sử dụng trong code hiện đại

**Ví dụ vấn đề với var:**

```javascript
var x = 10;
var x = 20;  // Không báo lỗi - dễ gây nhầm lẫn
console.log(x);  // 20
```

### 2.2. Khai báo với `let` (ES6+)

```javascript
let username = "Bob";
let age = 25;
```

**Đặc điểm:**

- Có phạm vi block scope `{}`
- Không thể khai báo lại trong cùng scope
- Giá trị có thể thay đổi
- Khuyến nghị sử dụng cho biến có thay đổi giá trị

**Ví dụ:**

```javascript
let count = 0;
count = 10;      // OK - thay đổi giá trị
count = count + 5;  // OK

let count = 20;  // Lỗi - không thể khai báo lại
```

### 2.3. Khai báo với `const` (ES6+)

```javascript
const PI = 3.14159;
const MAX_SIZE = 100;
```

**Đặc điểm:**

- Có phạm vi block scope `{}`
- Bắt buộc gán giá trị ngay khi khai báo
- Không thể gán lại giá trị
- Khuyến nghị sử dụng cho giá trị không thay đổi

**Ví dụ:**

```javascript
const API_URL = "https://api.example.com";
API_URL = "new url";  // Lỗi - không thể gán lại

const user = {name: "John"};
user.name = "Jane";   // OK - thay đổi thuộc tính
user = {};            // Lỗi - không thể gán lại object
```

---

## 3. So sánh var, let, const

| Đặc điểm        | var            | let                       | const                     |
|-----------------|----------------|---------------------------|---------------------------|
| Phạm vi         | Function scope | Block scope               | Block scope               |
| Hoisting        | Có             | Có (nhưng không khởi tạo) | Có (nhưng không khởi tạo) |
| Khai báo lại    | Có             | Không                     | Không                     |
| Gán lại giá trị | Có             | Có                        | Không                     |
| ES Version      | ES5            | ES6                       | ES6                       |
| Khuyến nghị     | Không dùng     | Dùng cho biến thay đổi    | Dùng mặc định             |

---

## 4. Quy tắc đặt tên biến

### 4.1. Quy tắc bắt buộc (Syntax Rules)

**Được phép:**

- Bắt đầu bằng chữ cái (a-z, A-Z), dấu gạch dưới `_`, hoặc dấu `$`
- Các ký tự tiếp theo có thể là chữ, số, `_`, `$`
- Phân biệt hoa thường

**Không được phép:**

- Bắt đầu bằng số
- Chứa khoảng trắng
- Chứa ký tự đặc biệt (trừ `_` và `$`)
- Trùng với từ khóa của JavaScript

```javascript
// Hợp lệ
let userName = "John";
let user_name = "John";
let _temp = 100;
let $price = 500;
let user2 = "Jane";

// Không hợp lệ
let 2
user = "John";      // Lỗi - bắt đầu bằng số
let user
-name = "John";  // Lỗi - chứa dấu gạch ngang
let user
name = "John";  // Lỗi - chứa khoảng trắng
let let = "value";       // Lỗi - trùng từ khóa
```

### 4.2. Từ khóa dành riêng (Reserved Keywords)

Không được đặt tên biến trùng với các từ khóa sau:

```
break, case, catch, class, const, continue, debugger, default, delete, 
do, else, export, extends, finally, for, function, if, import, in, 
instanceof, let, new, return, super, switch, this, throw, try, typeof, 
var, void, while, with, yield
```

### 4.3. Quy ước đặt tên (Naming Conventions)

#### camelCase (Khuyến nghị cho biến và hàm)

```javascript
let firstName = "John";
let userAge = 25;
let isLoggedIn = true;

function getUserInfo() {
    // code
}
```

#### PascalCase (Dùng cho Class, Constructor)

```javascript
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

let myAccount = new UserAccount("John");
```

#### UPPER_SNAKE_CASE (Dùng cho hằng số)

```javascript
const MAX_SIZE = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 3000;
```

#### snake_case (Ít dùng trong JavaScript)

```javascript
let user_name = "John";  // Ít phổ biến
let total_price = 1000;
```

---

## 5. Best Practices

### 5.1. Nguyên tắc chung

**Sử dụng tên có ý nghĩa**

```javascript
// Tránh
let x = 25;
let d = new Date();

// Nên
let age = 25;
let currentDate = new Date();
```

**Tên biến nên mô tả rõ mục đích**

```javascript
// Tránh
let data = [];
let temp = "";

// Nên
let userList = [];
let errorMessage = "";
```

**Sử dụng tiếng Anh**

```javascript
// Tránh
let tuoi = 25;
let tenNguoiDung = "John";

// Nên
let age = 25;
let username = "John";
```

### 5.2. Ưu tiên sử dụng `const` và `let`

```javascript
// Mặc định dùng const
const API_KEY = "abc123";
const users = [];

// Chỉ dùng let khi cần thay đổi
let counter = 0;
counter++;

// Tránh dùng var
var oldStyle = "not recommended";
```

### 5.3. Khai báo biến ở đầu scope

```javascript
function calculateTotal() {
    // Khai báo tất cả biến ở đầu
    const TAX_RATE = 0.1;
    let subtotal = 0;
    let total = 0;

    // Logic xử lý
    subtotal = 100;
    total = subtotal * (1 + TAX_RATE);

    return total;
}
```

### 5.4. Một biến - Một mục đích

```javascript
// Tránh
let temp = userName;
temp = temp.toUpperCase();
temp = getUserAge();  // Sử dụng lại cho mục đích khác

// Nên
let upperUserName = userName.toUpperCase();
let userAge = getUserAge();
```

### 5.5. Sử dụng boolean với tiền tố is, has, should

```javascript
let isActive = true;
let hasPermission = false;
let shouldUpdate = true;
let canDelete = false;
```


---

## 6. Lỗi thường gặp

### Lỗi 1: Sử dụng biến chưa khai báo

```javascript
console.log(age);  // Lỗi: age is not defined
```

### Lỗi 2: Gán lại giá trị cho const

```javascript
const PI = 3.14;
PI = 3.14159;  // Lỗi: Assignment to constant variable
```

### Lỗi 3: Khai báo lại biến let

```javascript
let username = "John";
let username = "Jane";  // Lỗi: Identifier 'username' has already been declared
```

### Lỗi 4: Không gán giá trị cho const

```javascript
const API_KEY;  // Lỗi: Missing initializer in const declaration
```

---
