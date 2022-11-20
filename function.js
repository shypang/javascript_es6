// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, CreatePoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// typescript에서 타입체크가 가능함, 타입스크립트 꼭 배우기 ~ 자바스크립트 이후
// function log(message : string) : number {
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.

let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Retrun a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic ...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// 2. a function declaration can be called earlier than it is defined. (hoisted)
// 3. a function expression is created when the execution reaches it.
//print();
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
  //print(); >> recursions , 피보나치 수열이나 반복되는 값이 있을 때 처리
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log("simplePrint!");
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE
// Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// const browser = "IE";
// switch (browser) {
//   case "IE":
//     console.log("go away!");
//     break;
//   case "Chrome":
//   case "Firefox":
//     console.log("love you!");
//     break;
//   default:
//     console.log("same all!");
//     break;
// }

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
      break;
    case "substract":
      if (a > b) {
        return a - b;
      } else {
        return b - a;
      }
      break;
    case "divide":
      if (a > b) {
        return a / b;
      } else {
        return b / a;
      }
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      console.log(
        "input command [add,  substract, divide, multiply, remainder]"
      );
      break;
  }
}
