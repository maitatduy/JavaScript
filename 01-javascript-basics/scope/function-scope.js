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