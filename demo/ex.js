var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

var schema = {
  properties: {
    number: {
      message: "please input a list of number",
      required: true,
    },
  },
};

//
// Get two properties from the user: username and email
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  console.log("  number list : " + result.number);
});
