{
    let blockVar = "Inside block";
    const PI = 3.14;
    console.log(blockVar);  // OK
    console.log(PI);        // OK
}

console.log(blockVar);  // Lỗi: blockVar is not defined
console.log(PI);        // Lỗi: PI is not defined

let age = 20;

if (age >= 18) {
    let message = "Bạn đã đủ tuổi";
    const canVote = true;
    console.log(message);  // OK
    console.log(canVote);  // OK
}

console.log(message);  // Lỗi: message is not defined
console.log(canVote);  // Lỗi: canVote is not defined