// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

// Implement these methods

arr = [1, 19, 3, 412, 12, 123, -123, 12, 14];
console.log(arr);

Array.prototype.find = function (cb, thisValue = undefined) {
  // implementation
  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);

    for (let i = 0; i < this.length; i++) {
        if (typeof(this[i]) !== 'undefined' && cb.call(thisValue, this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

console.log("find      ", arr.find(e => e < 0));

Array.prototype.findIndex = function (cb, thisValue = undefined) {
  // implementation
  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);

  for (let i = 0; i < this.length; i++) {
    if (typeof(this[i]) !== 'undefined' && cb.call(thisValue, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

console.log("findIndex    ", arr.findIndex(e => e > 15));

Array.prototype.lastIndexOf = function (item, start = this.length - 1) {
  // implementation
  if (typeof(start) !== 'number') return -1;

  if (start < 0) start = this.length - Math.abs(start);

  for (let i = start; i >= 0; i--) {
    if (this[i] === item) {
        return i;
    }
  }
  
  return -1;
};

console.log("lastIndexOf   ", arr.lastIndexOf(12, -3));

Array.prototype.some = function (cb, thisValue = undefined) {
  // implementation
  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);

  for (let i = 0; i < this.length; i++) 
    if (typeof(this[i]) !== 'undefined' && cb.call(thisValue, this[i], i, this))
      return true;
  return false;
};

console.log("some    ", arr.some(e => e == 0));

Array.prototype.every = function (cb, thisValue = undefined) {
  // implementation
  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);

  for (let i = 0; i < this.length; i++) 
    if (typeof(this[i]) !== 'undefined' && !cb.call(thisValue, this[i], i, this))
      return false;
  return true;
};

console.log("every    ", arr.every(e => e != 0));

Array.prototype.reduce = function (cb, initialValue) {
  // implementation

  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);
  if (this.length === 0){
    if (arguments.length < 2) throw new TypeError("Invalid arguments");
    else return initialValue;
  }
  let prevValue, i;

  if (arguments.length >= 2) {
    prevValue = initialValue;
    i = 0;
  }
  else {
    prevValue = this[0];
    i = 1
  }

  for (i; i < this.length; i++) {
    if(this[i] != undefined) 
      prevValue = cb(prevValue, this[i], i, this)
  }
  
  return prevValue;
};

console.log("reduce     ", arr.reduce((total, elem) => total + elem, 5));

Array.prototype.reduceRight = function (cb, initialValue) {
  // implementation

  if (typeof(cb) !== 'function') throw new TypeError(`${cb} is not a function`);
  if (this.length === 0){
    if (arguments.length < 2) throw new TypeError("Invalid arguments");
    else return initialValue;
  }

  let prevValue, i;
  if (arguments.length >= 2) {
    prevValue = initialValue;
    i = this.length - 1
  }
  else {
    prevValue = this[this.length - 1];
    i = this.length - 2
  }
  for (i; i >= 0; i--) {
    if(this[i] !== undefined) 
      prevValue = cb(prevValue, this[i], i, this)
  }
  
  return prevValue;
};

console.log("reduce right    ", arr.reduce((total, elem) => total + elem, 3));

Array.prototype.join = function (separator = ',') {
  // implementation

  let res = "";
  if (this.length === 0) return res;

  for (let i = 0; i < this.length - 1; i++)
    res += this[i] + String(separator);

  return res + this[this.length - 1];
};

console.log("join    ", arr.join(" and "));

Array.prototype.pop = function () {
  // implementation
  if (this.length === 0) return undefined;
  
  const tmp = this[this.length - 1];
  
  --this.length;

  return tmp;
  
};

console.log("pop    ", arr.pop());
console.log("pop  ", arr);

Array.prototype.unshift = function (...args) {
  // implementation
  for (let i = this.length - 1; i >= 0; i--) 
    this[i + args.length] = this[i];
    
  for(let i = 0; i < args.length; i++) 
    this[i] = args[i];

  return this.length;
};

console.log("unshift   ", arr.unshift(24, [1, 2, 3], 35));
console.log("unshift   ", arr);