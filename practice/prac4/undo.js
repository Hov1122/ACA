class Stack {
    #state;

    constructor() {
        this.#state = {};
        this.length = 0;
    }

    push(elem) {
        this.#state[this.length++] = elem;
    }

    pop() {
        const tmp = this.#state[this.length - 1];
        delete this.#state[this.length - 1];
        this.length--;
        return tmp;
    }

    isEmpty() {
        return this.length === 0;
    }
}

function debounce(fn, delay = 100) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(fn.bind(this, ...args), delay);
    }
}

const inputs = document.querySelectorAll("input.text");
const stack = new Stack();
//const prevValues = {};

const addToStack = debounce((i, e) => {
//    prevValues[i] = e.target.value 
    stack.push([i, e.target.value]);
})

function undo() {
    if (stack.isEmpty()) 
        return;
    const [i, val] = stack.pop();
    inputs[i].value = '';
}

document.getElementById("undo").addEventListener('click', undo);

inputs.forEach((input, i) => {
   // prevValues[i] = '';
    input.addEventListener('input', (e) => addToStack(i, e));
})



