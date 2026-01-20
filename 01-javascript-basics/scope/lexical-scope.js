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