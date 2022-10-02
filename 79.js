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

  let a = userInput[0].split(' ')
  let b = userInput[1].split(' ')
  var count = +0;
//   console.log(b);
 let uni=[...new Set(b)];
//  console.log(uni);
  
for (var i =0;i<uni.length;i++)
{
    count=0;
    for (var j =0;j<b.length;j++)
    {
        if(uni[i]==b[j])
        {
            count=count+1;
            
            
        }
        
    }
    if(count==2){
            console.log(uni[i])}
}

  //end-here
});