// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.toString(), "a=");
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty(), "bb==");

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size(), "cc==");
// queue.print();

// console.log(queue.dequeue(), "dddddd===");
// console.log(queue.peek(), "eeeee----");

// Queue Implementation
// enqueue(element) - add an element to the queue
// dequeue() - remove the oldest element from the queue
// peek() - get the value of the element at the front of the queue without removing it
// isEmpty() - check if the queue is empty
// size() - get the number of elements in the queue
// print() - visualize the elements in the queue

// queue imeplementaion optimized

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front == 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queues = new Queue();
console.log(queues.isEmpty(), "e---");
queues.dequeue(10);
queues.dequeue(20);
queues.dequeue(30);
console.log(queues.size(), "s==");
queues.print();
console.log(queues.dequeue(), "dd===");
console.log(queues.peek(), "pp==");
