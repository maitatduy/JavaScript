# Phạm vi trong JavaScript

## 1. Scope là gì?

**Scope (phạm vi)** là vùng hoặc khu vực mà một biến có thể được truy cập và sử dụng trong chương trình.

Scope quyết định:

- Biến nào có thể được truy cập ở đâu
- Biến tồn tại trong bao lâu
- Xung đột tên biến được xử lý như thế nào

### Tại sao Scope quan trọng?

- Tránh xung đột tên biến
- Quản lý bộ nhớ hiệu quả
- Tạo ra code an toàn và dễ bảo trì
- Ngăn chặn truy cập không mong muốn vào biến

---

## 2. Các loại Scope trong JavaScript

JavaScript có **4 loại scope chính**:

1. Global Scope (Phạm vi toàn cục)
2. Function Scope (Phạm vi hàm)
3. Block Scope (Phạm vi khối)
4. Lexical Scope (Phạm vi từ vựng)

---

## 3. Global Scope (Phạm vi toàn cục)

### Khái niệm

Biến được khai báo **bên ngoài tất cả các hàm** có phạm vi toàn cục.

Biến global có thể được truy cập từ bất kỳ đâu trong chương trình.

### Ví dụ

```javascript
// Biến global
let username = "John";
const API_URL = "https://api.example.com";

function showUser() {
    console.log(username);  // Truy cập được
}

function updateUser() {
    username = "Jane";  // Thay đổi được
}

showUser();  // "John"
updateUser();
showUser();  // "Jane"
```

### Đặc điểm

- Tồn tại trong suốt thời gian chạy chương trình
- Có thể truy cập từ mọi nơi
- Dễ gây xung đột tên biến
- Chiếm bộ nhớ lâu hơn

### Lưu ý

```javascript
// Biến không khai báo từ khóa tự động thành global (strict mode sẽ lỗi)
function test() {
    message = "Hello";  // Biến global không mong muốn
}

test();
console.log(message);  // "Hello"
```

### Best Practice

```javascript
// Tránh
let data = [];
let temp = "";
let result = 0;

// Nên - Giới hạn biến global
const APP_CONFIG = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

function processData() {
    let data = [];  // Local scope
    let temp = "";
    return data;
}
```

---

## 4. Function Scope (Phạm vi hàm)

### Khái niệm

Biến được khai báo **bên trong một hàm** chỉ có thể truy cập được trong hàm đó.

Áp dụng cho biến khai báo với `var`, `let`, `const`.

### Ví dụ

```javascript
function calculateTotal() {
    var subtotal = 100;  // Function scope
    let tax = 10;        // Function scope
    const total = 110;   // Function scope

    console.log(subtotal);  // OK
    console.log(tax);       // OK
    console.log(total);     // OK
}

calculateTotal();

console.log(subtotal);  // Lỗi: subtotal is not defined
console.log(tax);       // Lỗi: tax is not defined
console.log(total);     // Lỗi: total is not defined
```

### Ví dụ nâng cao

```javascript
function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        console.log(outerVar);  // Truy cập được biến outer
        console.log(innerVar);  // Truy cập được biến inner
    }

    inner();
    console.log(outerVar);  // OK
    console.log(innerVar);  // Lỗi: innerVar is not defined
}

outer();
```

### Đặc điểm

- Biến chỉ tồn tại trong hàm
- Không thể truy cập từ bên ngoài
- Tự động hủy sau khi hàm kết thúc
- Giảm thiểu xung đột tên biến

---

## 5. Block Scope (Phạm vi khối)

### Khái niệm

**Block** là đoạn code được bao bởi cặp dấu ngoặc nhọn `{}`.

Biến khai báo với `let` và `const` có **block scope**, nghĩa là chỉ tồn tại trong block đó.

Biến khai báo với `var` **không có** block scope.

### Ví dụ với let và const

```javascript
{
    let blockVar = "Inside block";
    const PI = 3.14;
    console.log(blockVar);  // OK
    console.log(PI);        // OK
}

console.log(blockVar);  // Lỗi: blockVar is not defined
console.log(PI);        // Lỗi: PI is not defined
```

### Ví dụ với if statement

```javascript
let age = 20;

if (age >= 18) {
    let message = "Bạn đã đủ tuổi";
    const canVote = true;
    console.log(message);  // OK
    console.log(canVote);  // OK
}

console.log(message);  // Lỗi: message is not defined
console.log(canVote);  // Lỗi: canVote is not defined
```

### Ví dụ với for loop

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}

console.log(i);  // Lỗi: i is not defined
```

### So sánh var vs let/const

```javascript
// var - KHÔNG có block scope
if (true) {
    var x = 10;
}
console.log(x);  // 10 - Vẫn truy cập được

// let - CÓ block scope
if (true) {
    let y = 20;
}
console.log(y);  // Lỗi: y is not defined
```

### Ví dụ thực tế

```javascript
function processUserData(users) {
    const results = [];

    for (let i = 0; i < users.length; i++) {
        let user = users[i];  // Block scope trong for

        if (user.age >= 18) {
            let status = "adult";  // Block scope trong if
            results.push({...user, status});
        }
    }

    // console.log(user);    // Lỗi
    // console.log(status);  // Lỗi
    // console.log(i);       // Lỗi

    return results;
}
```

---

## 6. Lexical Scope (Phạm vi từ vựng)

### Khái niệm

**Lexical Scope** (hay Static Scope) là cơ chế mà một hàm có thể truy cập biến từ:

- Scope của chính nó
- Scope của hàm bên ngoài (parent)
- Scope toàn cục

Quy tắc: JavaScript tìm biến từ trong ra ngoài (inside-out).

### Ví dụ cơ bản

```javascript
let global = "Global";

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";

        console.log(innerVar);   // "Inner" - Scope hiện tại
        console.log(outerVar);   // "Outer" - Parent scope
        console.log(global);     // "Global" - Global scope
    }

    inner();
}

outer();
```

### Scope Chain (Chuỗi phạm vi)

```javascript
let a = "Global A";

function level1() {
    let b = "Level 1 B";

    function level2() {
        let c = "Level 2 C";

        function level3() {
            let d = "Level 3 D";

            console.log(d);  // Level 3 D
            console.log(c);  // Level 2 C - từ parent
            console.log(b);  // Level 1 B - từ grandparent
            console.log(a);  // Global A - từ global
        }

        level3();
    }

    level2();
}

level1();
```

### Closure - Ứng dụng của Lexical Scope

```javascript
function createCounter() {
    let count = 0;  // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1
console.log(counter.count);        // undefined - không truy cập trực tiếp
```

---

## 7. So sánh các loại Scope

| Loại Scope | Khai báo      | Phạm vi                  | Ví dụ                        |
|------------|---------------|--------------------------|------------------------------|
| Global     | Bên ngoài hàm | Toàn chương trình        | `let x = 10;`                |
| Function   | Trong hàm     | Chỉ trong hàm            | `function() { let x = 10; }` |
| Block      | Trong `{}`    | Chỉ trong block          | `if (true) { let x = 10; }`  |
| Lexical    | Lồng nhau     | Truy cập scope bên ngoài | Closure                      |

---

## 8. Shadowing (Che khuất biến)

### Khái niệm

**Variable Shadowing** xảy ra khi biến trong scope bên trong có cùng tên với biến ở scope bên ngoài.

### Ví dụ

```javascript
let name = "Global";

function test() {
    let name = "Function";  // Shadow biến global

    if (true) {
        let name = "Block";   // Shadow biến function
        console.log(name);    // "Block"
    }

    console.log(name);      // "Function"
}

test();
console.log(name);        // "Global"
```

### Lưu ý với var

```javascript
var x = 10;

function test() {
    console.log(x);  // undefined (hoisting)
    var x = 20;
    console.log(x);  // 20
}

test();
console.log(x);    // 10
```

---

## 9. Temporal Dead Zone (TDZ)

### Khái niệm

**Temporal Dead Zone** là khoảng thời gian từ khi block bắt đầu cho đến khi biến `let`/`const` được khai báo.

Trong khoảng này, biến tồn tại nhưng chưa thể sử dụng.

### Ví dụ

```javascript
{
    // TDZ bắt đầu
    console.log(x);  // Lỗi: Cannot access 'x' before initialization

    let x = 10;      // TDZ kết thúc
    console.log(x);  // 10
}
```

### So sánh với var

```javascript
{
    console.log(x);  // undefined (hoisting)
    var x = 10;
    console.log(x);  // 10
}
```

---

## 10. Best Practices

### 10.1. Giảm thiểu biến global

```javascript
// Tránh
let users = [];
let products = [];
let cart = [];

// Nên
const App = {
    data: {
        users: [],
        products: [],
        cart: []
    }
};
```

### 10.2. Sử dụng let/const thay vì var

```javascript
// Tránh
var count = 0;

// Nên
let count = 0;
const MAX_COUNT = 100;
```

### 10.3. Khai báo biến gần nơi sử dụng

```javascript
// Tránh
function process() {
    let a, b, c, d, e;

    // 100 dòng code

    a = 10;
}

// Nên
function process() {
    // code

    let result = calculate();
    console.log(result);
}
```

### 10.4. Sử dụng IIFE để tạo scope riêng

```javascript
// Immediately Invoked Function Expression
(function () {
    let privateVar = "Private";
    console.log(privateVar);
})();

console.log(privateVar);  // Lỗi
```

---

## 11. Các lỗi thường gặp

### Lỗi 1: Truy cập biến ngoài scope

```javascript
function test() {
    let message = "Hello";
}

console.log(message);  // Lỗi: message is not defined
```

### Lỗi 2: Quên khai báo biến

```javascript
function calculate() {
    result = 100;  // Tạo biến global không mong muốn
}

calculate();
console.log(result);  // 100
```

### Lỗi 3: Sử dụng var trong loop

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);  // 3, 3, 3
    }, 100);
}

// Sửa bằng let
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);  // 0, 1, 2
    }, 100);
}
```

---
