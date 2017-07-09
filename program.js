 var fs = require('fs');
 var result= undefined;
 function addone(){
 fs.readFile(process.argv[2],function donereading(err, fileContents){
     result= fileContents.toString().split("\n").length-1;
     console.log(result);
 });
 }
 
 addone();

 