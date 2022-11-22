//boolean

// false : 0, -0, '', null, undefined
// true : -1, 'hello', 'false'

// let obj = {
//   name: "ellie",
// };
// if (obj) {
//   console.log(obj, name);
// }

// obj && console.log(obj.name);

// class Counter {
//   constructor(runEveryFiveTimes) {
//     this.counter = 0;
//     this.callback = runEveryFiveTimes;
//   }
// }

// increase(runIf5Times);
// this.counter++;
// console.log(this.counter);
// if (this.counter % 5 === 0) {
//   this.callback && this.callback(this.counter);
//   // if (this.callback){ 위와 기능 같음
//   //     this.callback(this.counter);
//   // }
// }

// function printSomething(num) {
//   console.log(`Wow! ${num}`);
// }

// function alertNum(num) {
//   alert(`Wow! ${num}`);
// }

// const coolCounter = new Counter();

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

//ternary-operator.js
// good code
function getResult(score) {
  return score > 5 ? "up" : "down";
}

// nullish-coalescing.js
// null이거나 undefined일 경우 출력
function printMessage(text) {
  const message = text ?? "Nothing to display ?";
  console.log(message);
}

// default parameter is only for undefined
function printMessage(text = "nothing to display") {
  console.log(text);
}

// Logical OR operator
function printMessage(text) {
  const message = text || "Nothing to display";
  console.log(message);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}

function fetchFromServer() {
  return "Hiya from notbook";
}

//Object Destructuring
const person = {
  name: "Julia",
  age: 20,
  phone: "01012341234",
};

function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

console.clear();

// spread syntax - object
const item = { type: "shirts", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

//good code
const shirt0 = Object.assign(item, detail);
console.log(shirt0);

// better code
const shirt = { ...item, ...detail, price: 40 };
console.log("shirt", shirt);

console.clear();
//Optional Chaining

const bob = {
  name: "Julia",
  age: 20,
};

const anna = {
  name: "Julia",
  age: 20,
  job: {
    title: "software engineer",
  },
};

// good code
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// good code
function displayJobTitle(person) {
  const title = person.job?.title ?? "No Job Yet ";
  console.log(title);
}

//template literals
const person2 = {
  name: "Julia",
  score: 4,
};

//good code
console.log(`Hello ${person2.name}, Your current score is : ${person2.score}`);

// good code
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is : ${score}`);
}

console.clear();

//loop
const items = [1, 2, 3, 4, 5, 6];

function getAllEvents(items) {
  return items.filter((num) => num % 2 === 0);
}

function multiplyByFour(items) {
  return items.map((num) => num * 4);
}

function sumArray(items) {
  items.reduce((a, b) => a + b, 0);
}

//good code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// good code2
const result2 = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result2);

//promise >> async / await

async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}

// remove duplicates!
const array = ["1", "2", "3", "1", "5", "2"];
console.log(array);

console.log([...new Set(array)]);

//유용한 애니메이션 라이브러리
//typelt >> 타이핑하는 애니메이션
//scroll out  >> 스크롤하는 애니메이션
//anime.js 경량 애니메이션 자바스크립트 프레임워크
//rellax 스크롤별로 속도를 다르게 할 수 있음
//greensock 난이도가 있는 애니메이션 라이브러리
//추후시간있을 때 처리
