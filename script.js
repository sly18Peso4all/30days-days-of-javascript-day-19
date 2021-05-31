//Exercises: Level 1
// 1) Create a closure which has one inner function
// Solution 1
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add10(2));
console.log(add5(2));

//Exercises: Level 2
//1) Create a closure which has three inner functions
// Solution 1
var e = 10;
function addition(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(addition(1)(2)(3)(4));

console.log("");
console.log("");
console.log("");

// Solution 3
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

// Solution 4
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inArray([1, 2, 10])));

// Question
// 1)Write function sum that works like this: sum(a)(b) = a+b.
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(8)(2));
