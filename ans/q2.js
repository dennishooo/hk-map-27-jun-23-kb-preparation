let pattern = "+-+-+-+";

// expect outcome
// console.log('+-+-+-+');
// console.log(' -+-+- ');
// console.log('  +-+  ');
// console.log('   -   ');

let start = 0;
let end = pattern.length;
let space = " ";
// while (end > start) {
//   console.log(space + pattern.slice(start, end));
//   end--;
//   start++;
//   space += " ";
// }

for (let i = 0; i < pattern.length / 2; i++) {
  console.log(space + pattern.slice(start, end));
  end--;
  start++;
  space += " ";
}
