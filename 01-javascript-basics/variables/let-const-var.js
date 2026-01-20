// var (không khuyến nghị)
var count = 10;
var count = 20; // không lỗi
console.log(count);

// let
let total = 100;
// let total = 200; // Error: không cho khai báo lại
total = 200;
console.log(total);

// const
const PI = 3.14;
// PI = 3.15; // Error
console.log(PI);

// Nên dùng const
const siteName = "My Website";

// Chỉ dùng let khi giá trị thay đổi
let counter = 0;
counter++;
counter++;

console.log(counter);
