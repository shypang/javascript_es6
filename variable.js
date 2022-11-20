// 1. Use strict
// Whole-script strict mode syntax
// Javascript is very flexible
// flexible === dangerous
// added ECMAScript 5
// note로 정리해야 복습도 하고 Playground처럼 놀 수 있음, 확인하면서 공부하는게 중요
"use strict"; //상식적인 범위 안에서 사용가능
console.log("hello world");

// 2. Variable
// let (added in ES6) (Mutable)

let name = "ellie";
console.log(name);
name = "hello";
console.log(name);

// var(don't ever use this!)
// var hoisting (move declaration from bootom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants (Immutable)
// favor immutable data type always for a few reasons:
// -security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53 ) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
let x2 = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(
  `value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

// javascript 위에 타입이 올려진 타입스크립트가 위에 자바스크립트의 타입문제 때문에 발명됨

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
