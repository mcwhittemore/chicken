#!/usr/bin/env node
;(function () { // wrapper in case we're in module_context mode

var run = function(userArgs){
  var file = userArgs[0];
  var input = "";

  if(userArgs.length==2){
    input = userArgs[1];
  }
  else if(userArgs.length>2){
    console.error("TO MANY ARGUMENTS FOR `RUN`", userArgs);
    return;
  }

  file = file.indexOf(".")==-1 ? file+".chicken" : file;

  var read = require("fs").readFileSync;

  var chicken = require("../lib/chicken");

  //console.log("FILE", file);
  var code = read(file, {encoding:"utf8"});

  var result = chicken(input, code);
  var out = result.replace(/&#[\d]*;/g, function(match, grp){
    return String.fromCharCode(match.replace("&#", "").replace(";", ""));
  });
  console.log(out);
}

// windows: running "npm blah" in this folder will invoke WSH, not node.
if (typeof WScript !== "undefined") {
  WScript.echo("npm does not work when run\n"
              +"with the Windows Scripting Host\n\n"
              +"'cd' to a different directory,\n"
              +"or type 'chicken.cmd <args>',\n"
              +"or type 'node chicken <args>'.")
  WScript.quit(1)
  return
}


process.title = "chicken";

var userArgs = process.argv.slice(2);

if(userArgs.length==0){
  console.error("INVALID ARGUMENTS", userArgs);
}
else{ 

  var command = "-r";

  if(userArgs[0][0]=="-"){
    command = userArgs[0];
    userArgs = userArgs.slice(1);
  }

  if(userArgs.length==0){
    console.error("INVALID ARGUMENTS", userArgs);
  }
  else if(command=="-r"){
    run(userArgs);
  }
  else{
    console.error("INVALID COMMAND", command);
  }

}

})();
