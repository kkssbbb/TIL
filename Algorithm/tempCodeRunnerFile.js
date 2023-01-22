class Node {
  constructor(){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top= null;
    this.bottom =null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(v){
    const newNode = new Node(v);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop(){
    if(this.length === 0) return;

    this.top = this.top.next;
  }
}