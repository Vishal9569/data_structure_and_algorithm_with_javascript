//  ------Linked List------- /// 

// it is a linear data structure where element are store in node //
// --> each nodes contain data  and reference of the next node // 

   
class Node{
     
    constructor(val){
         this.val = val;
         this.next = null
    }
}

class LinkedList {
      
    constructor(){
        this.head = null
    }

    append(val){
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            return
        }

        let curr = this.head
        while(curr.next){
            curr = curr.next
        }

        curr.next = newNode;
    }

    printList(){
         let curr = this.head;
         let result =""

         while(curr){
            result += curr.val+'->'
            curr=curr.next

         }
         console.log(result + 'null');
         
    }

}


let list = new LinkedList();
list.append(20)
list.append(30)
list.append(40)

list.printList()