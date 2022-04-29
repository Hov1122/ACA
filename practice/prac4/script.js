class Queue {
    #state;
    #start;
    constructor() {
        this.#state = {};
        this.curr = 0;
        this.#start = 0;
    }

    enqueue(elem) {
        this.#state[this.curr++] = elem; 
    }

    dequeue() {
        
        const tmp = this.#state[this.#start];
        delete this.#state[this.#start++];
        return tmp;
    }

    get size() {
        return this.curr - this.#start;
    }
}

const q = new Queue();

q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
console.log(q.dequeue());
q.dequeue();
console.log(q);