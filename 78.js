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
  let c =[];
//   console.log(b);
 for (var i=0;i<b.length;i++)
 {
     if(i==b.length-1)
     {
        let max = Math.max(b[i],b[0])
    //  console.log(max);
     let min = Math.min(b[i],b[0]);
    //  console.log(min);
     var res=max-min;    
     }
     else{
     let max = Math.max(b[i],b[i+1])
    //  console.log(max);
     let min = Math.min(b[i],b[i+1]);
    //  console.log(min);
     var res=max-min;
     }
    
     if(res>a[1]){
        //  console.log(res);
         c.push(1);
     }
     else{
         c.push(0);
     }
     
     
 }
 console.log(...c);

  //end-here
});