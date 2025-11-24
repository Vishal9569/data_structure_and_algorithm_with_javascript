//  stack is also linear data structure that allow push or pop operation only at one end //

//  monotoic stack is special type of data structure that kept data either increaisng or decreasing order // 


/* 
 
monotonic increase stack algo 

while stack.top > current:
    pop
push current

*/

/* 
 
monotonic increase stack algo 

while stack.top < current:
    pop
push current

*/





const monoIcr=(arr) =>{
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(-1);

   for (let i = 0; i < n; i++) {
          while (stack.length > 0 && arr[stack.at(-1)] > arr[i]) {
          ans[stack.pop()] = arr[i];
          }
          stack.push(i);
      }
      return ans;
}

 console.log(monoIcr([4,5,6,7,7,1]));
 