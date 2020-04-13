//****References

//find the .face image

const $face = document.querySelector('.face');

//locate the .result output

const $result = document.querySelector('.result');
//look for the .roll button

const $btn = document.querySelector('.roll');

//****Logic and Functions

// A random Number between 1 and 6, inclusive
let roll = Math.floor(Math.random() * 6) + 1

console.log(roll);  // 1, 2, 3, 4, 5, or 6


//***** Right now you are: *******

// - Building the html and css to look as if we rolled 3
// - Using the browser's developer tools to modify the document to look as if you rolled a 5
// - Write out the "micro" steps you took, like this....



//Change the value of the src attribute of the .face image

//Change the value of the content within to reflect the new roll


//Event Listeners

//Listen for the .roll button to be clicked
