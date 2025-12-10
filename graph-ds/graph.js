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
 
        for(let it of edge){
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

//