/// tree is non-linear hierarchical data structure  made of nodes  // 

class node{
     
     constructor(data){
          this.data = data;
          this.list = [];
     }

}

class Tree{
       
     constructor(rootVal){
           this.root =  new node(rootVal)
     }


     addNode(parent , value){
          const temp = new node(value);
          parent.list.push(temp);
          return temp;
     }

     printParent(Node = this.root , parent = null){

            if( parent === null )
               console.log(`${Node.data} -> root `);
            else
               console.log(`${Node.data} -> ${parent.data}`);

            for(let child of Node.list){
               this.printParent(child , Node);
            }
                
     }

     printChildern(node = this.root){
          let childStr = node.list.map(c => c.data).join(" ");
          console.log(`${node.data} -> ${childStr}`);

          for(let child of node.list){
               this.printChildern(child);
          }
          
     }

    printLeafNode(node = this.root){
        if(node.list.length === 0){
           process.stdout.write(node.data + " ");
          return;
        }

        for(let child of node.list){
           this.printLeafNode(child);
        }
    }

    printDegree( node = this.root , parent = null){
      let degree = node.list.length + ( parent ? 1 : 0 )
      console.log(`${node.data} -> ${degree}`);

      for(let child of node.list){
          this.printDegree(child , node);
      }
      
    }


}

const buildTree = new Tree(1);

let n2 = buildTree.addNode(buildTree.root , 2);
let n3 = buildTree.addNode(buildTree.root , 3);

let n4 = buildTree.addNode(n2 , 4);
let n5 = buildTree.addNode(n2 , 5);


// print parents // 

 console.log("Parents of each node:");
 buildTree.printParent();

 // print child // 

 console.log("Children of each node:");
 buildTree.printChildern();


// Print leaf nodes
process.stdout.write("Leaf nodes: ");
buildTree.printLeafNode();
console.log();

// Print degrees
console.log("Degrees of each node:");
buildTree.printDegree(); 
 
 