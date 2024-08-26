"use strict";
const nImplicit = 3;
let flag = true;
let str;
let arr = [];
// let tuple: (boolean | number)[] = [true]
let obj = { x: 0 };
obj.foo();
obj();
obj.bar = "2";
const adder = (a, b) => a + b;
const complexFun = (obj) => {};
let letter;
const fn = (t) => {
  switch (t) {
    case "maybe":
    case "no":
      // case 'yes':
      return 1;
    default:
      return "s";
  }
};
const dates = {
  from: new Date(),
  to: new Date(),
};
dates.value = 3;
let widest;
widest = { a: "smt" };
let narrow = widest;
