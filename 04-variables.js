// const let

let a = 123;
a += 12222;

const b = [123];
const c = { number: 123 };

Object.freeze(b);
Object.freeze(c);

// b = [123, 456, 789];
// b.push(678);
c.age = 23230;

// pass by value vs pass by reference

console.log(b);
console.log(c);

let arrA = [123];

let arrB = arrA; // pass by reference (array/ object)

arrB.push(456);

console.log(arrA);

let d = 123;

e = d; // pass by value (primitive data)

e = 678;

console.log(d);
console.log(e);
