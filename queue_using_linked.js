// Implementation queue by using linked_list // 

class node{
     
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{

    constructor(){
         this.front = null;
         this.rear = null;
         this.size = 0;
    }

    enqueue(val){
         
        let newNode = new node(val);
        
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
             
        }
       else{
        this.rear.next = newNode;
        this.rear = newNode;
       }

        this.size++;

    }
   
    dequeue(){
         
        if(this.isEmpty()) return null;

        let deleteNode = this.front;
        this.front = this.front.next;

        if(this.front === null){
            this.rear = null;
        }

        this.size--;

        return deleteNode.data;
        
    }

    peek(){

        if(this.isEmpty()){
            return null;
        }
        return this.front.data;
    }

    isEmpty(){

        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prtq(){

        let curr = this.front;
        const list = [];

        while(curr){
            list.push(curr.data);
            curr = curr.next;
        }
        
        console.log(list);
        
    }
    
}

const obj = new Queue();

obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);


console.log(obj.peek());
console.log(obj.getSize());
console.log(obj.isEmpty());


obj.prtq();

obj.dequeue();
obj.dequeue();


console.log(obj.peek());
console.log(obj.getSize());
console.log(obj.isEmpty());

obj.prtq();