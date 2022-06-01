
// initializing html elements as constants
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// generates a random index for the array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];

}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland","the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

//adding event lister
randomize.addEventListener('click', result);

// result fuction
function result() {

// storing the storyText as newstory so the main texts dont change 
let newStory = storyText;

// generation random strings from the respective arrays using the randomValueFromArray(array) function
 let xItem =randomValueFromArray(insertX);
 let yItem =randomValueFromArray(insertY);
 let zItem =randomValueFromArray(insertZ);

 // replacing items in the in the newstory with the random strings generated
 newStory = storyText.replace(':insertx:',`${xItem}`)
 newStory = newStory.replace(':insertx:',`${xItem}`)
 newStory = newStory.replace(':inserty:',`${yItem}`)
 newStory = newStory.replace(':insertz:',`${zItem}`)

// checks for the user in put and replaces it with the name Bob
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',`${name}`)

  }

  // checks if the radio button is checked 
  if(document.getElementById("uk").checked) {
    const weight =  Math.round(300 / 0.071) +" "+ "Stones" ;
    const temperature =  Math.round((94 -32)*(5/9)) +" "+"centigrade";
   
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

// stores the outut in the story class in the html and makes it visible
story.textContent = newStory;
story.style.visibility = 'visible';
}
