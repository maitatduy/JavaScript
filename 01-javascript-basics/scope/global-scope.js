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

// Biến không khai báo từ khóa tự động thành global (strict mode sẽ lỗi)
function test() {
    message = "Hello";  // Biến global không mong muốn
}

test();
console.log(message);  // "Hello"

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