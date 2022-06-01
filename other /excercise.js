/*const number = ["1", "4", "10"]
for(num in number){   
console.log(num)
} */

/*
console.log("    ")

const numbers = ["1", "4", "10"]
for(const num of numbers){   
console.log(num)
} */

/*
buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
}
*/

/*
let myname ="deen";
let you = 32;

console.log(myname)
console.log(you)*/

myName = "Bob";
myAge = 40;

let dog = { name: "Spot", breed: "Dalmatian" };

/*console.log(dog.breed)*/

let myNumber = "500"; // oops, this is still a string
/*console.log(typeof myNumber)*/
typeof myNumber;
myNumber = 500; // much better — now this is a number
/*console.log(typeof myNumber)*/

let count = 1;
count = 2;

/*console.log(count)*/

const bird = { species: "Kestrel" };
/*console.log(bird.species);*/

bird.species = "Striated Caracara";
/*console.log(bird.species);  // "Striated Caracara"*/

/*
let num1 = 12;
let num2 = 12.123456789;
let num3 = num2.toFixed(2)
/*console.log(typeof num2)
console.log(num3)*/

/*let myNumba = '74';
myNumba += 3;

console.log(typeof myNumba)
console.log(myNumba); */

let myNumba = "74";
let conNUmber = Number(myNumba) + 3;

/*console.log(typeof myNumba);
console.log(typeof conNUmber);*/
/*
const num4 = 2;
const num5 = 16;

num6 = num5 ** 3;

console.log(num6)


const num7 = num5 % 9 * num4;
const num8 = num5 + num4 / 8 + 2;

console.log(num7);
console.log(num8);

const num9 = num7++;

console.log(num9);*/

let finalResult;

let evenOddResult;

// Add your code here
/*
const num1 = 20;
const num2 = 4;
const num3 = 6;
const num4 = 8;

const number = num1 + num2
const number1 = num4 - num3

finalResult = number * number1
let nam = (finalResult % 2) > 0;
evenOddResult = nam;


console.log("is number odd?", {evenOddResult}); */

/*// concatting strings 
const a = "money";
const b = "house";
const c = `${a} ${b}`;
console.log(`${a} ${b}`);
console.log(c); */

/*const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."*/

/*
const browserType = 'mozilla';
//using include()
if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}*/

/*
const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"
*/

/*

const list = document.querySelector('.output ul');
list.innerHTML = '';
const greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting.includes('Christmas')) {
    const listItem = document.createElement('li');
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}*/
/*
const greetings = ['Happy Birthday! mat',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for mat Christmas',
                 'Get well soon'];
//looping an array
for(greets of greetings){
    if(greets.includes("mat")){
        console.log(greets)
    }

}*/

/*
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let city of cities) {
  // write your code just below here
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0,1);
  const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}*/
/*
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let station of stations) {
    for(let stay of station){
        if(stay === ";"){
           let x = station.indexOf(";")
            console.log(x)

        }
    }
    // using slice
  first = station.slice(0,3)

//const result = station;


}
/*
// using indexOf
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 2);
}
*/

// this will repeat the function on the new array, using map()
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
//console.log(doubled);  // [ 10, 4, 14, 12 ]

// using filter
/*function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  //console.log(longer);  // [ "Liverpool", "Edinburgh" ]
 
  
// using split
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

const citi = data.split(',');
//console.log(citi) */

let products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
// number
/* // price list and item
let total = 0;
 for (let product of products) {
    let splitProd = product.split(":");
    let names = splitProd[0];
    let price = splitProd[1];
    price = Number(price)
    names = names.toString()
    total += price;    
    
    let itemText = `${names} — $${price}`

    console.log(itemText)
 };
*/

/*
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// split the string at the plus sign
let myArray = myString.split("+");

console.log(myArray) */

// playing with arrays

let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
myArray.pop();
let nameIndex = 0;
let myString = [];
for (let arrIndex of myArray) {
  let arr = arrIndex;
  let result = `${arr} (${nameIndex})`;

  nameIndex += 1;
  myString.push(`${result}`);
}

myString = myString.join("-");
//console.log(myString)

// pjoin and split
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(",");
//console.log(cities);

cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array

const commaSeparated = cities.join(",");
//console.log(commaSeparated);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

//
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
let cat = birds.indexOf("Eagles");
//Number(cat)
birds.splice(cat, 1);
/*

let ebay = [];
for(let bird of birds){
    if(bird.startsWith("E")){
        ebay.push(bird)
    }
}
console.log(ebay)*/

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

let newStory = storyText.replace(":insertx:", `${xItem}`);
newStory = newStory.replace(":insertx:", `${xItem}`);
newStory = newStory.replace(":inserty:", `${yItem}`);
newStory = newStory.replace(":insertz:", `${zItem}`);

let weight = Math.round(300);
let temperature = Math.round(94);

weight = Math.round(300 / 0.071) + " " + "Stones";
temperature = Math.round((94 - 32) * (5 / 9)) + " " + "centigrade";

newStory = newStory.replace("300 pounds", weight);
newStory = newStory.replace("94 fahrenheit", temperature);

//console.log(newStory)
/*
 let array =  ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
 const random = Math.floor(Math.random()*array.length);

 console.log(random) */

function myFunction(a, n) {
  n = n - 1;
  for (let k of a) {
    if ((k = a[n])) {
      return k;
    }
  }
}

//console.log(myFunction('zyxbwpl',1))

function myFunction(a, b) {
  return a.b;
}

var x = { x: "a", y: "b", z: "c" };
var y = "z";
var k = Object.keys(x);

//console.log(k)

let g = k.includes("i");
//console.log(g)

//using switch statement in place of case
/*switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
*/
// a single line if else statement, its called the ternary operztor

/*let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';

//you ca n also use ternary for writing functions

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));

//using map function, it is used to call a function on an array (array.map(function))

function toUpper(string) {
  return string.toUpperCase();
}
*/

/*
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats.map(toUpper);

//console.log(upperCats) 

//using "fileter()" t call a function, works like map but returns a boolean
function lCat(cat) {
  return cat.startsWith('L');
}
/*
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(lCat)*/

//console.log(filtered);

var x = Math.floor(1.752);
//console.log(x)

// using default parameter in a string
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

// to select multiple buttons at once

/*const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}


 */
/* check  form submit

form.addEventListener('submit', e => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});
*/

/*
const buttonBar = document.querySelector('.button-bar');

  // Add your code here

 var href = link.getAttribute("href");
 link.setAttribute("href", "https://www.tutorialrepublic.com");
link.removeAttribute("href");

/** */
call backs

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();



promise 
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});
#fetch,then, json, then

*/

/ fofr many promise at a time that are not interwoven
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
*/


/ proper usage of promise

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  }
  catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});

*/