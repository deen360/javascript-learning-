let bandInfo;

const artist = {
  name: "p-square",
  nationality: "nigerian",
  genre: "love",
  members: 2,
  formed: 2005,
  split: 2018,
  albums: [
    { name: "love", released: 2011 },
    { name: "ezego", released: 2012 },
    { name: "ifunaya", released: 2016 },
    { name: "roll-it", released: 2015 },
    { name: "party hard", released: 2014 },
  ],
};

//console.log(artist.albums["3"]["released"]);

bandinfo = `The band ${artist.name} hail from ${artist.nationality} their song genre is ${artist.genre} and the group contains ${artist.members} artists and they were formed in ${artist.formed}, the group later split in ${artist["split"]}, some of their major albums include "${artist["albums"][0]["name"]}" released in ${artist["albums"][0]["released"]},"${artist["albums"][1]["name"]}" released in ${artist["albums"][1]["released"]} ,"${artist["albums"][2]["name"]}" released in "${artist["albums"][2]["released"]}" and finally "${artist["albums"][3]["name"]}" released in ${artist["albums"][3]["released"]}, they have some of the biggest tracks in the ${artist.nationality} music industry`;

//console.log(bandinfo);

//constructors
function cat(name) {
  this.name = name;
  this.breed = "Cymric";
  this.color = "white";
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

const cat3 = new cat("mike");
//new cat("yusuf").greeting();

//console.log(cat3.greeting());

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
myObject.greet(); // Greetings from Madrid
//console.log(myObject.toString()); // "[object Object]"
//console.log(Object.getPrototypeOf(myObject)); // Object {...}

const myDate = new Date(1995, 11, 17);

//console.log(myDate.getYear());

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype;
Person.prototype.constructor = Person;

//prototype concepts
const personPrototyp = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototyp;
Person.prototype.constructor = Person;

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
