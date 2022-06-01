
//use prompt in place of console.log in this execercise 
function displayMessage() {
    console.log('This is a message');
}

//displayMessage()
 
function random (y) {
    var p = Math.random()
    console.log(p);
    return Math.floor(p * y)
    
}
/*
var x = Math.random(10)
var A = random(1000)
//console.log(x)
console.log(A) */

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']


function chooseName(){

var nam = Math.round (Math.random() * (names.length - 1))
console.log(names[nam] );
console.log(nam)
}
chooseName()