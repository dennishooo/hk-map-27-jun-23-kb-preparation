const moment = require("moment");

var a = moment("2016-01-01");
var b = a.add(1, "week");
a.format();
("2016-01-08T00:00:00-06:00");

console.log(a.format("LTS"));
