/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      // If the queue is empty, both first and last point to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, add the new node to the end and update last
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    const value = this.first.val;
    this.first = this.first.next;
    this.size--;

    // If the queue is now empty, reset last to null as well
    if (this.size === 0) {
      this.last = null;
    }

    return value;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
