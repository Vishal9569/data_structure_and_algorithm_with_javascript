/*A stack is a linear data structure that allows operations to be performed at one end, called the top. The two primary operations are:

Push: Adds an element to the top of the stack.
Pop: Removes and returns the top element from the stack.  */

//   STACH-UNDERFLOW -->  means does not have element left in stack  or where user want pop element but stack is empty  //
//  STACK-OVERFLOW --> means stack size is full done insert element at this time
//   arise when stack is full but push operation performed  //

// ---------- Array Implementation of a Stack In JavaScript----------------//

class stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty :");
      return;
    }

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) { 
      return 0;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  prtSt() {
    console.log(this.items);
  }
}

let st = new stack();

st.push(1);
st.push(2);
st.push(3);

st.prtSt();

st.pop();

st.prtSt();
console.log(st.peek());
console.log(st.size());
st.pop();
st.pop();

console.log(st.peek());
st.isEmpty();
console.log(st.size());
st.prtSt();



/// stack implementation using linked list // 

class node{

     constructor(x){
        this.data = x ;
        this.next = null;
     }
}

class stk{ 
       
    constructor(){
        this.top = null;
        this.length = 0;
    }


      isEmpty(){
        return this.top === null;
     }

      push(val){
        const temp  = new node(val);
        temp.next = this.top; 
        this.top =  temp;
        this.length++;
        }


    pop(){

         if(this.isEmpty()) return -1;

        const value = this.top.data;
        this.top = this.top.next;
        this.length--;
        
        return value;
    }

      

    peek(){

          if(this.isEmpty()){ 
            return -1;
          }

           return this.top.data;
    }

  

    size() {
        return this.length;
    }


    printStack(){
        
     let cell = this.top;
     let result = [];

     while (cell !== null) {
         result.push(cell.data);
         cell = cell.next;
     }

     console.log("stack : "  , result);
     
    }
    
}

let st1 = new stk();

st1.push(10);
st1.push(20);
st1.push(30);

st1.printStack();          // top -> bottom: 30, 20, 10

console.log("Peek:", st1.peek());  // 30

console.log("Pop:", st1.pop());    // 30
st1.printStack();                  // 20, 10

console.log("Size:", st1.size());  // 2

st1.pop();
st1.pop();
st1.pop();                         // Underflow

console.log("Peek:", st1.peek());