class node {
      constructor(data){
           this.data = data;
           this.right = this.left = null;
      }
}


const root = new node(1);

let n1 = new node(2);
let n2 = new node(3);
root.left = n1;
root.right = n2;
n1.left = 4;
n1.right = 5;

n2.left = 6;
n2.right =7;


console.log("inorder : ");


function inorderTraversal(root){
  
    if(root === null) return null;

    inorderTraversal(root.left);
    console.log(root.data);
    inorderTraversal(root.right);
 
}

console.log("preoder :");


function  preoderTraversal(root){

     if(root === null) return null;

      console.log(root.data);

      preoderTraversal(root.left);

      preoderTraversal(root.right);

      
}

console.log("postoder :");


function  postoderTraversal(root){

     if(root === null) return null;

      postoderTraversal(root.left);

      postoderTraversal(root.right);

       console.log(root.data);

}



inorderTraversal(root);
preoderTraversal(root);
postoderTraversal(root);


