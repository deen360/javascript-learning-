class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      ` the perimeter of a ${this.name} is  ${
        this.sides * this.sideLength
      } meters`
    );
  }
}

/*const square = new Shape("square", 5, 4);

//console.log(square.calcPerimeter());

const triangle = new Shape("Triangle", 3, 5);
triangle.calcPerimeter();*/

class squares extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(`${this.sides * this.sideLength}`);
  }
}

const cat = new squares(5);
//cat.calcArea();

let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);

let myString2 = JSON.parse(myString);
console.log(myString);
console.log(myString2);
