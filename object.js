// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in Javascript are instances of Objects
// Object = {key : value};

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob); //javascript는 동적으로 동작해서 이런 프로퍼티 추가가 가능함

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); //object의 키를 가져올 떄 사용
console.log(ellie["name"]); //런타임에서 키가 결정될 떄 사용

ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  //console.log(obj.key); // undefined, 현재 obj에 key값이 정해지지 않아서 출력 안됨
  console.log(obj[key]); // ellie, 런타임에서 하기 코드에서 지정되어있어서 출력
}

printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "bob", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);


