var read = require("fs").readFileSync;

var chicken = require("./chicken");

console.assert(chicken("","chicken") === "chicken");
console.assert(chicken("test foo", read("chicken/echocat.chicken") + "") == "test foo")
console.assert(chicken("", read("chicken/hello.chicken") + "") == "&#72;&#101;&#108;&#108;&#111;&#32;&#119;&#111;&#114;&#108;&#100;");
console.assert(chicken(0, read("chicken/99.chicken")+"") == "n&#111;&#32;chicken&#115;&#10;");