let name = "Global";

function test() {
    let name = "Function"; // Shadow biến global

    if (true) {
        let name = "Block"; // Shadow biến function
        console.log(name); // "Block"
    }

    console.log(name);      // "Function"
}

test();
console.log(name); // "Global"

let name = "Global";

function test() {
    let name = "Function"; // Shadow biến global

    if (true) {
        let name = "Block"; // Shadow biến function
        console.log(name);  // "Block"
    }

    console.log(name); // "Function"
}

test();
console.log(name);  // "Global"