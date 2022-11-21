// async & await
// clear style of using promise :)

// 1.async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     // return resolve("ellie");
//     // return "ellie"; >> pending state로 나옴
//   });
// }
async function fetchUser() {
  //do network request in 10 secs ....
  return "ellie";
}

const user = fetchUser();
console.log(user);

// await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  //throw "error";
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple(); //promise는 만듬과 동시에 실행해서 더 빠르게 생성함
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

//

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
