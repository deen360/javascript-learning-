const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// using call back hell
/*
function alice_1() {
  alice1.animate(aliceTumbling, aliceTiming);
}

function alice_2(callback) {
  setTimeout(() => {
    alice2.animate(aliceTumbling, aliceTiming);
    callback();
  }, 2000);
}
function alice_3(callback) {
  setTimeout(() => {
    alice3.animate(aliceTumbling, aliceTiming);
    callback();
  }, 2000);
}
//function alice_1(alice1, callback) {}

function doOperation() {
  alice_1(alice_2);
  alice_2(alice_3);
}

doOperation();
*/

//using promises
/*
function alice_1() {
  return new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
      alice1.animate(aliceTumbling, aliceTiming);
      resolve();
    } else {
      //throw new Error("Alarm delay must not be negative");
      reject(`Error Alarm must not be negative`);
    }
  });
}

function alice_2() {
  setTimeout(() => {
    alice2.animate(aliceTumbling, aliceTiming);
  }, 2000);
}

function alice_3() {
  setTimeout(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  }, 4000);
}

alice_1()
  .then(alice_2)
  .then(alice_3)
  .catch((error) => console.log(error));
*/
//using async and await

/*
function alice_2() {
  setTimeout(() => {
    alice2.animate(aliceTumbling, aliceTiming);
  }, 2000);
}

function alice_3() {
  setTimeout(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  }, 4000);
}

async function asyncTRY() {
  await alice1.animate(aliceTumbling, aliceTiming);

  await alice_2();

  alice_3();
}

asyncTRY();
*/
