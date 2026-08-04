// const a = 20;
// const b = 30;

function addtwoNumbers(a, b) {
    console.log(a + b);

    const added = addtwoNumbers(10, 100);
    console.log("Added:", added);
}
addtwoNumbers(10, 100);
addtwoNumbers(1000, 100);
addtwoNumbers(-30, 40);
addtwoNumbers(4, 2);

function add(a, b) {
    return a + b;
}

const sum = add(2, 3);
console.log("Sum:", sum); // 5
