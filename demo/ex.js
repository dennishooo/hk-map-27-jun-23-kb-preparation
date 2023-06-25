var prompt = require("prompt");

//
// Start the prompt
//
let total = 0;
let answer;
prompt.start();

var schema = {
  properties: {
    number: {
      message: "please input a list of number",
      //   type: "number",
      required: true,
    },
    gf: {
      message: "do you have a girlfriend",
      //   required: true,
    },
  },
};

// not working example
// while (answer != "0") {
//   console.log("asking for number");
//   prompt.get(schema, (err, result) => {
//     console.log(result.number);
//     answer = result.number;
//     console.log({ answer });
//   });
// }

// callback hell
// prompt.get(schema, (err, result) => {
//   console.log("1st answer", result.number);
//   total += parseInt(result.number);
//   if (result.number != "0") {
//     prompt.get(schema, (err, result) => {
//       total += parseInt(result.number);
//       console.log("2nd answer", result.number);
//       if (result.number != "0") {
//         prompt.get(schema, (err, result) => {});
//       }
//       console.log({ total });
//     });
//   }
// });

// recursion
function getNumber(err, result) {
  console.log({ result });
  if (isNaN(parseInt(result.number))) {
    console.log("this is not a valid number");
    return askForNumber();
  }
  total += parseInt(result.number);
  if (result.number != "0") {
    // ask him/her again form number
    askForNumber();
    // console.log(result.number);
  } else {
    console.log({ total });
  }
}
function askForNumber() {
  prompt.get(schema, getNumber);
}

askForNumber();

// demo of async/sync
// for (let i = 0; i < 10; i++) {
//   let startTime = Date.now();
//   setTimeout(() => {
//     let endTime = Date.now();
//     console.log("hiii", { timeDifference: endTime - startTime });
//   }, 1000 * i);
// }
