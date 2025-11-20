

class Node{
     
    constructor(val){
         this.val =val;
         this.next = null;
    }
};


class Linked_List{
     
    constructor(){
        this.head = null; 
    }

    add(val){
          
        let newNode = new Node(val);

        if(!this.head){
             this.head = newNode;
             return;
        }
       
        let node = this.head;
        while(node.next){ 
             node = node.next;
        }

        node.next = newNode;
    }

    delete(val){
           
        if(!this.head) 
        {
            console.log("there is not element");
            return;
        }

        if(this.head.val === val){
              
            this.head = this.head.next;
            return;
        }

       let prev = null , curr = this.head;

        while(curr && curr.val !== val){
              prev = curr;
              curr = curr.next;
        } 

        if(!curr) {
            console.log("val not found !");
            return;
        }
        prev.next = curr.next;
        
             
    }

    prtlst(){
          
        if(!this.head) {
          console.log("there will be not any element exist in the list : ")

        }
       
        let point = this.head;

        while(point){
             console.log(point.val)
            point = point.next;
        }

        console.log("\n");
        
    }
}

let list = new Linked_List();

list.add(23);
list.add(24);
list.add(25);
list.add(26);

list.prtlst();

list.delete(25);

list.prtlst();