// // const a = {
// //     valueOf : function () {
// //         return 4;
// //     }
// // }

// // function Car() {
// //     console.log(this);
// //     this.name = "a";
    
// // }

// // c1 = new Car();
// // console.log(c1);

// // if (a == 4) console.log("yes");
// // else console.log("no");
// // console.log(a);

// // const obj = {
// //     [Symbol.toPrimitive](hint) {
// //         if (hint === "number") {
// //             console.log(4);
// //             return 4;
// //         }
// //         else if (hint === "default") {
// //             console.log("4");
// //             return 4;
// //         }
// //         else if (hint === "string") {
// //             return 8;
// //         }
// //     },
// //      toString() {
// //          return "a";
// //      }
// // }

// // if(obj.prototype.ToPrimitive("string","string") == "a") {
// //     console.log('meh');
// //     alert(obj);
// //}


// obj1 = {
//     from: 14,
//     to: 28,
//     a: this,
//     test: () => {
//         console.log(this);
//     },
//     [Symbol.iterator]: Iterator
//     // [Symbol.iterator] : function() {
//     //     current = this.from;
//     //     return {
//     //         next: () => {
//     //             console.log(this);

//     //             if (current <= this.to) {
//     //                 return {
//     //                     value: current++,
//     //                     done: false
//     //                 }
//     //             }
    
//     //             return {
//     //                 done: true
//     //             }
            
//     //         }
//     //     }
//     // }
// }

// obj1.test();

// function Iterator() {
//     let current = this.from;
//     to = this.to;
//     return {
//         next: function() {
//             console.log(this);
//             if (current <= to) {
//                 return {
//                     value: current++,
//                     done: false
//                 }
//             }

//             return {
//                 done: true
//             }
        
//         }
//     }

// }
// //console.log(obj1[Symbol.iterator]())

// iterator = obj1[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// // console.log(iterator.next());
// // obj1.test();

// for (let i of obj1) {
//     console.log(i);
// }

// // const obj2 = {
// //     a: this,
// //     obj3: {
// //         test: () => {
// //             console.log(obj2);
// //             console.log(this);
// //         }
// //     }
// // }

// // obj2.obj3.test();


// obj = Object.create({}, {
//     a : {
//         get() {
//             return 4;
//         }
//     },

//     b : {
//         value: function() {return 4;}
//     }

// })

// //obj.a = 23;
// console.log(obj.a);

// a = {
//     name: "asd",
//     asd: "asde",
// }

// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42
//   };
//   const {education: degree = {}} = user;
//   console.log(degree); //prints: undefined

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     #speak() {
//         console.log(this.name + " makes a noise");
//     }
// }

// class Cat extends Animal {
//     #blah;
//     constructor(name, blah) {
//         super(name)
//         //this._name = name;
//         this.#blah = blah;
//     }

//     // get name() {
//     //     return this._name;
//     // }

//     // set name(newName) {
//     //     this._name = newName;
//     // }
// }

// let c = new Cat("asd", "blah");
// c.name = "ase";
// console.log(c.name);

// function test() {
//     return this;
// }

// const a = {
//     name: "asd"
// }

// console.log(test.call(a));

// let a = {
//     name: "asd"
// }
// function fn() {
//     console.log(this);
// }

// const n = fn.bind(a);

// n();
// a = null;
// n();

// function fn() {
//     fn.prototype.count++;
// }

// fn.prototype.count = 0;

// fn();
// fn();
// console.log(fn.prototype.count);

// const p = new Promise((res, rej) => {
//     setTimeout(() => {res(2);
//         console.log("done")}, 1000);
//
// })
//
// console.log(p)
function c () {
    var b = 5;
}
c();
let d = 4;

var a = '4'; // window