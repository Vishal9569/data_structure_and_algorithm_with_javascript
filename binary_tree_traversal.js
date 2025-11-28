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
n1.left = new node(4);
n1.right =new node(5);

n2.left = new node(6);;
n2.right =new node(7);;


 


function inorderTraversal(root){
  
    if(root === null) return null;

    inorderTraversal(root.left);
  process.stdout.write(root.data + " ")
    inorderTraversal(root.right);
 
}

 


function  preoderTraversal(root){

     if(root === null) return null;

     process.stdout.write(root.data + " ")

      preoderTraversal(root.left);

      preoderTraversal(root.right);

      
}

 


function  postoderTraversal(root){

     if(root === null) return null;

      postoderTraversal(root.left);

      postoderTraversal(root.right);
     
       process.stdout.write(root.data + " ")

}




console.log("\nInorder:");
inorderTraversal(root)

console.log("\nPreorder:");
preoderTraversal(root)

console.log("\nPostorder:");
postoderTraversal(root)


//   level oder traversal // 

  function leveOderTraversal(root){
     
     if(!root) return null;

      let Queue = [root]

      while(Queue.length){
      
          let node = Queue.shift();
         process.stdout.write(node.data + " ")

     
           if(node.left) Queue.push(node.left);
           if(node.right) Queue.push(node.right);
           
      }

     
      
         
  }
  
  console.log("\nlevelOderTraversal : ")
 leveOderTraversal(root)



// height find in binary tree // 

function height(root){
      
     if(!root) return 0;

   let Lheight = height(root.left);
    let Rheight =  height(root.right);

    return 1+(Math.max(Lheight , Rheight));
}

console.log("\nheight of tree : ");

process.stdout.write(height(root) + " ");




