
 // binary tree  is non -linear hierarchical data structure  made up nodes where each node connected to other one or more child nodes //
 
 /*
 It has these core characteristics:

1. Root Node

The topmost node in the tree.

2. Parent–Child Relationship

Every node (except the root) has a parent, and can have 0 or more children.

3. No Cycles

A tree cannot have a loop or cycle.
There is only one unique path between any two nodes.

4. Levels

Nodes are arranged in levels starting from the root.

5. Subtrees

Each child node forms its own smaller tree, called a subtree.
*/


                                                                    

class Node{
     constructor(data){
         this.data = data;
         this.left = null;
         this.right = null; 
     }
}

  

let node1 = new Node(10);
node1.left = new Node(20);
node1.right = new Node(30);
  console.log(node1);


// -->   A Binary Tree Data Structure is a hierarchical data structure in which each node has at most two children --//


class node {
     
  constructor(val){
     this.val = val;
     this.next = null;
  }
}