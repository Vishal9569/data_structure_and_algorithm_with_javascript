

//  Queue is linear data-structure that push is backend side and pop in fortend side that follow FIFO structure // 

class Queue{
     
    constructor(){
        this.items = [];
    }

    enqueue(val){
        this.items.push(val);
    }

    dequeue(){
        return this.isEmtpy() ? "queue is empty" : this.items.shift();
    }

    isEmtpy(){
        return this.items.length === 0;
    }

    peek(){
        if(this.isEmtpy()) {return -1;}
        return this.items[0];
    }

    size(){
        return this.items.length;
    }

    prtQue()   { console.log(this.items);
    }
}

let obj = new Queue();
obj.enqueue(2);
obj.enqueue(3);
obj.enqueue(4);

console.log(obj.peek())
console.log(obj.size())
console.log(obj.isEmtpy());
obj.prtQue();

obj.dequeue();

console.log(obj.peek())
console.log(obj.size())
console.log(obj.isEmtpy());

obj.prtQue();

obj.dequeue();
obj.dequeue();


console.log(obj.peek())
console.log(obj.size())
console.log(obj.isEmtpy());

obj.prtQue();
