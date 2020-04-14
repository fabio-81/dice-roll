// **** References

//find the .face image

const $face = document.querySelector('.face');

//locate the .result output

const $result = document.querySelector('.result');
//look for the .roll button

const $btn = document.querySelector('.roll');

// **** Logic and Functions

// **** Longer way
// function rollThedice(){  


// shorter way
const rollTheDice = () => {


// A random Number between 1 and 6, inclusive
let roll = Math.floor(Math.random() * 6) + 1

console.log(roll);  // 1, 2, 3, 4, 5, or 6

// Change the value of the src attribute of the .face image

$face.setAttribute('src', `img/dice${roll}.svg`)

// Change the value of the content within to reflect the new roll

$result.textContent = (`You rolled: ${roll}`)
}


// **** Event Listeners

//Listen for the .roll button to be clicked

// **** Before a function is created

//$btn.addEventListener('click', function(){})  **** longer method

//$btn.addEventListener('click', () => console.log('click'))  **** test if the click is working



// **** After the function is created

$btn.addEventListener('click', rollTheDice)

// Do the first roll
rollTheDice();