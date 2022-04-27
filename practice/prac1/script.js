"use strict";

// function Car(model, color, speed) {
//     this.name = model,
//     this.speed = speed,
//     this.color = color,
//     this.petrol = 30,
//     this.currentSpeed = 0,
//     this.setPetrol = function(litr) {
//         if (this.petrol + litr <= 0) 
//             this.petrol = 0;
//         else 
//             this.petrol += litr;
//     }
//     this.hasPetrol = function() {
//         return this.petrol > 0; // !! to return bool
//     }
//     this.drive = function() {
//         const id = setInterval(() => {
//             if (!this.hasPetrol() || this.petrol < 4) {
//                 console.log("chka");
//                 clearInterval(id);
//                 return;
//             }

//             this.currentSpeed = this.speed <= this.currentSpeed ? this.speed : this.currentSpeed + 20;
//             this.setPetrol(-4);
//             console.log("speed: ", this.currentSpeed);
//             console.log("petrol:", this.petrol);
//         }, 1000)
//     }
// }

// const c1 = new Car("BMW", 240)
// c1.drive();
// console.log(c1);

// const obj = {a : 1, b : 2, c : 3, d : 2, e : 0, f : 2};
// const keys = Object.keys(obj);

// const res = keys.reduce((acc, curr) => {
//     acc[obj[curr]] = acc[obj[curr]] ? [...acc[obj[curr]], curr] : curr;
//     //if (Array.isArray(acc[obj[curr]])) acc[obj[curr]].push(curr);
//     //else acc[obj[curr]] = [curr];
//     return acc;
// }, {});

// console.log(res);

// let s = "asjfkldas123asdk213sadk43";
// let start = 0;
// let isNum = false;
// let res = 0;

// for (let i = 0; i < s.length; i++) {
//     if (!isNum && !isNaN(s[i])) {
//         start = i;
//         isNum = true;
//     }
//     else if (isNum && isNaN(s[i])) {
//         res += Number(s.substring(start, i));
//         isNum = false;
//     }
// }

// if (isNum) res += Number(s.substring(start, s.length));

// console.log(res);

const a = {name : "a"};
const b = {...a}; // copy
