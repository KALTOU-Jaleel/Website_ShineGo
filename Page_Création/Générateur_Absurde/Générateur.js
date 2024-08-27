const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. ";

let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];






randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

let xItem = randomValueFromArray(insertx);
let yItem = randomValueFromArray(inserty);
let zItem = randomValueFromArray(insertz);

/*let indexX = storyText.indexOf(":insertx:");
let indexY = storyText.indexOf(":inserty:");
let indexZ = storyText.indexOf (":insertz:"); */

/*newStory = storyText.slice(0, indexX-1 ) + xItem + storyText.slice( indexX + 10, indexY -1)  + yItem + storyText.slice(indexY + 10 , indexZ-1 ) + zItem + storyText.slice(indexZ +10); */
newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem );

  if(customName.value !== '') {
    const name = customName.value;
let nom = name.toString();
    newStory = newStory.replace("Bob", nom);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94 -32)*(5/9));
    let poids = weight.toString() + "stone";
    let temp = temperature.toString() + "centigrade";
newStory = newStory.replaceAll("94 farhenheit", temp);
newStory = newStory.replaceAll("300 pounds", poids);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}