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

function debounce(fn, delay = 500) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(fn.bind(this, ...args), delay);
    }
}

const inputs = document.querySelectorAll("input.text");
const stack = new Stack();
//const prevValues = {};

const addToStack = debounce((i, start, end, val) => {
//    prevValues[i] = e.target.value
console.log(start, end)
    if (start > end)
        val = val.substring(end, start);
    console.log(val)
    stack.push([i, start, end, val]);
})

function undo() {
    if (stack.isEmpty()) 
        return;
    const [i, start, end, val] = stack.pop();

    
    if (start > end) {
        inputs[i].value = inputs[i].value = inputs[i].value.substring(0, end) + val.substring(end, start) + inputs[i].value.substring(start);
    }
       
    else 
        inputs[i].value = inputs[i].value = inputs[i].value.substring(0, start) + inputs[i].value.substring(end);
}

document.getElementById("undo").addEventListener('click', undo);

inputs.forEach((input, i) => {
   // prevValues[i] = '';
   let start = input.value.length;
   input.addEventListener('click', (event) => {
    start = input.selectionStart;
  });
    input.addEventListener('input', (e) => addToStack(i, start, input.selectionEnd, e.target.value));
    input.addEventListener('keydown', debounce(function(event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        if (key === "ArrowLeft" || key === "ArrowRight" || key === "Backspace") {
            start = input.selectionStart;
            console.log(start);
        }
            
    }));
    
})



