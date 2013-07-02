var read = require("fs").readFileSync;

var chicken = require("./chicken");

console.assert(chicken("","chicken") === "chicken");
console.assert(chicken("test foo", read("echocat.chicken") + "") == "test foo")
console.assert(chicken("", read("hello.chicken") + "") == "&#72;&#101;&#108;&#108;&#111;&#32;&#119;&#111;&#114;&#108;&#100;");

console.log(chicken(0, read("99.chicken")+""));