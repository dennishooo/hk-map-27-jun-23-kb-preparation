// function can be called by other function

let arr = [1, 2, 3];

const logSth = (element) => {
  console.log(element);
};

arr.forEach(logSth);

let newArr = arr.map((element, idx) => {
  console.log({ element, idx });
  return element * element;
});

// define function
function add(a, b) {
  console.log(a + b);
}

const getNumber = () => 123;
const getNumber1 = () => {
  return 123;
};
const getObject = () => ({
  name: "dennis",
});

add(1, 2);

console.log(getNumber());
console.log(getNumber1());
console.log(getObject());

console.log(newArr);

// arrow function

const minus = (a, b) => {
  console.log(a - b);
};

minus(5, 9);

logSth("dennis is handsome");
