 const node = 5;
 let adj = [[0,2] , [1,2] , [1,3] , [2,4]];

 const arr = Array.from({length: node} , ()  => [] );

 for( let [u,v] of adj){
     
    arr[u].push(v);
    arr[v].push(u);
 }
 
console.log("this is edge : " , adj);  // this edges 
console.log("this is node " , arr);  // this is node 


