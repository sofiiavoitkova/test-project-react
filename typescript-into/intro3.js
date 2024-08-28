"use strict";
let booktanker;
let cartanker;
booktanker.inside[0].autor;
cartanker.inside[0].model;
function mapper(something, fn) { return something.map(fn); }
let arrNum = [1, 2, 3];
let arrStr = ['1', '2', '3'];
let resNumeric = mapper(arrNum, (val) => ++val);
let resString = mapper(arrStr, (val) => val + '!');