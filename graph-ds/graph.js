 // ----------graphs data structure------------//  
 // it is a non-linear data structure  for this situations where nodees and vertices connected randomly , 
 // we use to graph like situation of social network , computer network  , gps or more  where different node or vertices connected without any hierarchy or strucutre // 


 // A graph structure consist of vertices or edges   --> vertices refereed to the node //
 //                           ---> edges are lines or arcs that connect any two nodes in the graph.


// --------------------Represent of graph in most common ways------------------------//
//  1---->  Adjacency matrix 
//  2---->  Adjacency list 

//  [[    FRIST METHOD ---> Adjacency matrix  ]]
// Adjacency matrix represented by  boolean matrix of ( 0 and 1 )  
// so we create 2d matrix  n*n  size 
//  --> if there is edge from vertx i to j mark adjMat[i][j] as 1 
// --> if there is no edge from vertex i t j mark adjMat[i][j] as 0 


 function createdGraph( V , edge){
  let mat = Array.from({length : V} , ()=>Array(V).fill(0));
 
        for(let it of edge){    //[[1,0] , [2,0] , [1,2]]; //
             let u = it[0];
             let v = it[1];
             mat[u][v]  = 1 ;
        }

        return mat;
 }
  // Driver code // 

  let V = 3; 
  let edge = [[1,0] , [2,0] , [1,2]];

  let mat = createdGraph(V ,edge);

  console.log("Adjacnecny matrix :");

   for( let i= 0; i < V; i++){
       let row = "";
       for(let j =0; j < V ; j++){
           row += " " + mat[i][j];
       }
       console.log(row);
       
   }
  


    // ----------->Second method (mostly used )----------------///
  
    // Adjacency list representation  //

//---> An array of list is used to store edges between two vertices 
//---> the size of array is equal of vertex in the graph // 
//---> the entry of index i of array contain linked list containing vertice that adjacent to vertex . //

// adjList[0] will have all nodes which are connected(neighbour) to vertex 0.

//      (1) ------- (2)                                             0 → 1, 2
//       \          /      ---------------->                        1 → 0, 2
//        \        /                                                2 → 0, 1
//         \     /
//           (0)
//       undirected graph                                     adjacency list 
//         
//         



function AdjcencyList(V , edges){

     let adj = Array.from( {length: V} , ( () => []))

     for( let it of edges){
         
         let u = it[0];
         let v = it[1];

         adj[u].push(v);
         adj[v].push(u);
     }

     return adj;
}


let vertex = 3 ;
 let edges = [ [0, 1], [0, 2], [1, 2] ];
 
 let list = AdjcencyList(vertex , edge);

 console.log("Adjacency List Representation ");

  for( let i =0; i< list.length; i++){
      
     let row = i + "-> ";

     for(let it of list[i]){
         
        row += it + " ";
     }
     console.log(row.trim());
  }
 

 
 
// --------------directed graph ---------// 


function directed(V , edges){
     let mat = Array.from({length : V }, () => [])

     for(let it of edges) {
          let u =  it[0]
          let v = it[1]

         mat[u].push(v);
     }

     return mat; 

}

let ver= 3 ;
    let ed = [ [1, 0], [1, 2], [2, 0] ];
 
 let lists = directed(ver , ed);

 console.log(" undirected graph Representation ");

  for( let i =0; i< lists.length; i++){
      
     let row = i + "-> ";

     for(let it of lists[i]){
         
        row += it + " ";
     }
     console.log(row.trim());
  }
 

