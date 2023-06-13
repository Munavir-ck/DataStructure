class Queue{

  constructor(){
    this.items=[]
  }


  isEmpty(){
    return this.items.length===0
  }

  enqueue(value){
   return this.items.push(value)
  }

 dequeue(){
    return this.items.shift()
 }

 print(){
console.log(this.items.toString());
 }

}

const queue=new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.dequeue()
queue.print()