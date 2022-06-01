const person = {
  //name: ['Bob', 'Smith'],
  name: {
    first: "Bob",
    last: "Smith",
  },

  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
//making a person be able to name an object and give it value too
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person["height"]);

//console.log(person.name)

//console.log(person.name.first)

//updating items in an object
person.age = 45;
person["name"]["last"] = "Cratchit";

//console.log(person['age'])
//console.log(person['name']['last'])

//crating new items in objcet
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

//console.log(person['eyes'])
console.log(person.farewell());

//using one function for multiple objects

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const yus = createPerson("yusuf");

//console.log(yus.introduceSelf())

// you can use constructures instead

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const deen = new Person("deen");

//console.log(deen.introduceSelf());

//const myNotification = new Notification("Hello!");
//console.log(myNotification);

//to check if object has own properties
const irma = new Person("Irma");

//console.log(Object.hasOwn(irma, 'name')); // true
//console.log(Object.hasOwn(irma, 'greet')); // false

// class structure

//

//creates a professor from the class of person
//adding new feature to class professor after inheriting name for the class person
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

// create an element abd append
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj["homeTown"]} // Formed: ${obj["formed"]}`;
  header.appendChild(myPara);
}
