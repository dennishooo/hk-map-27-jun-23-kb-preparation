const dennis = {
  name: "dennis",
  age: 18,
  isHandsome: true,
}; // object
console.log(typeof dennis);
console.log(dennis.name);
console.log(dennis.age);
console.log(dennis.resss); // would be undefined

console.table(dennis);
console.log(Object.keys(dennis));
console.log(dennis.name.endsWith("s"));

const students = [{ name: "John" }, { name: "May" }, { name: "Daniel" }];

for (let student of students) {
  console.log(student.name);
}

for (let key in dennis) {
  console.log(`${key}: ${dennis[key]}`);
}
