// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a = userInput[0].split('')
  mid = Math.floor(a.length/2);
//   console.log(a[mid]);
//   console.log(a.length);
//  if(a[0] == "a" || a[0] == "A");
//   console.log(a[mid]== "m" ||a[mid]=="M");
//   console.log(a[a.length-1]=="z"|| a[a.length-1]=="Z");

if((a[0] == "a" || a[0] == "A") && (a[mid]== "m" ||a[mid]=="M") && (a[a.length-1]=="z"|| a[a.length-1]=="Z"))
{
    console.log(1);
}
else{
    console.log(0);
}

  //end-here
});