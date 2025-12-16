// dfs oo bfs traversal //  


//-----------> BFS (breadth frist search traversal)------------------/

// it traversal start source node and explores the graph level by level // 
// popular graph algo based on [Dijkstra's algo , kahn,s Alogrithm , Prim's algorithm]

// BFS itself can be used to detect cycle in a directed and undirected graph, find shortest path in an unweighted graph and many more problems.


function bfs(adj) {

     const V = adj.length;
     const visited = new Array(V).fill(false);
     const res =[];

     const q = [];

     let src = 0;
     visited[src] = true;
     q.push(src);

     while(q.length>0){
         const curr = q.shift();
         res.push(curr);

         for(const x of adj[curr]){
             if(!visited[x]){
                visited[x] = true;
                q.push(x);
             }
         }
     }

     return res 
}

function addEdge(adj , u , v ){
     adj[u].push(v);
     adj[v].push(u);
}

let V=5; 
let adj = new Array(V).fill(0).map(()=> []);


    addEdge(adj , 1 ,2);
    addEdge(adj , 1 ,0);
    addEdge(adj , 2 ,0);
    addEdge(adj , 2 , 3);
    addEdge(adj , 2 ,4);
   
    const res = bfs(adj);

    for(let i=0; i < res.length; i++){
        process.stdout.write(res[i] + " ");
    }
 

//----------dfs( depth first search )---------- //

 // depth first search is graph traversal methos that start soruces vertex and explores each path completley  //
 // before backtracking and exploring other path to avoid revisiting nodes in graph with cycles a visited array is used to track visited vertices //  


//NOTE: THERE  can be multiple dfs traversal of a graphs according to order in which we pick adjacent vertices. 

 function dfsRec(adjs , visit , s , res){
       visit[s]= 0;
       res.push(s);

       // recursively visit all adjacent vertices // 

       for( let i of adjs[s]){
          if(!visit[i]){
             dfsRec(adj , visit , i , res);
          }
       }

 }

  function dfs(adjs){
      const visit = new Array(adj.length).fill(false);
      const res = [];
      dfsRec(adj , visit , 0 , res);
      return res;
  }

 let Vertex = 5;
 let adjs = new Array(V).fill(0).map( ()=> []);


 for(let i=0; i < Vertex ; i++){
     adjs.push([]);

     addEdge(adjs , 1 ,2);
     addEdge(adjs , 1 , 0);
     addEdge(adjs , 2 ,0);
     addEdge(adjs , 2 ,3 );
     addEdge(adjs , 2 ,4);
 }

 // perform dfs starting from vertx 0; // 

 const ress = dfs(adjs);

 for(let i =0; i < res.length; i++){
     console.log("dfs approach :")
     process.stdout.write(res[i] + " ");
 }