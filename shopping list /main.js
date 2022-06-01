//method one
/*
const shop = document.querySelector("input");

const butxn = document.querySelector("button");
const ulist = document.querySelector("ul");

//events that occur when add button is clicked
butxn.addEventListener("click", () => {
  const addElem = document.createElement("li"); // creates a list

  const delButxn = document.createElement("button"); //creates a button
  delButxn.textContent = "delete"; // labels the button text as delete

  addElem.textContent = shop.value; //adds user input to the list created
  const newText = addElem.textContent; // stores the user input as newText
  ulist.appendChild(addElem); // append the text to the ul

  addElem.appendChild(delButxn); // append the button to each list item

  shop.value = " "; // empties the input feild

  delButxn.addEventListener("click", () => {
    ulist.removeChild(addElem);
  });

});

*/
//methid 2
//events that occurs when delete button is clicked

const shop = document.querySelector("input");
const butxn = document.querySelector("button");
const ulist = document.querySelector("ul");

//events that occur when add button is clicked
butxn.addEventListener("click", () => {
  const newText = shop.value; //stores user input as new text
  shop.value = " "; // empties the input feild

  //create new line span and button
  const newLINE = document.createElement("li");
  const newSPAN = document.createElement("span");
  const newBUTNX = document.createElement("button");

  newLINE.appendChild(newSPAN);
  newLINE.appendChild(newBUTNX);

  newSPAN.textContent = newText;
  newBUTNX.textContent = "delete";
  ulist.appendChild(newLINE);

  //events that occurs when delete button is clicked
  newBUTNX.addEventListener("click", () => {
    ulist.removeChild(newLINE);
  });

  shop.focus();
});
