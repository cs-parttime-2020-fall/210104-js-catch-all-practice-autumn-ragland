console.log(`21 01 04 JS "Catch All" Practice`);

// REVIEW

// Declare an empty array.
let userArray = [];

// prompt to add an element to the array 
let userElement = prompt("Add an element to the array");

// until "q" is entered
while(userElement != "q"){
    userArray.push(userElement);
    userElement = prompt("Add another element to the array");
}

// console.log(userArray.length);

// Once "q" has been entered iterate through all elements in the array
for(let i = 0; i < userArray.length; i++){
    // outputting each element in the console.
    console.log(userArray[i])
}

// SCOPE

let exampleVariable;
exampleVariable = "Hello";
function updateValue() {
    let exampleVariable = "World";
    console.log(exampleVariable);
}
console.log(exampleVariable);
updateValue();

// TRY CATCH

// Declare a function alertName that accepts one parameter and outputs the message : "Hello PARAMETER".
function alertName(enteredName) {
    alert(`Hello ${enteredName}`);
}
// Prompt the user to enter their name and save the returned value in a variable. 
let userName = prompt("Enter your name"); // Comment out your prompt to generate errors and ensure that the catch block works.
try {
    // Call the function alertName in a try block
    alertName(userName);
} catch (error){
    // Catch potential errors and display them in the console.
    console.warn(error);
} finally {
    // Use a finally block the output the message "Function Alert Name has run" in the console.
    console.log(`Function Alert Name has run`);
}

// SWITCH CASE

// Prompt the user to enter a month of the year.
let userMonth = prompt("Enter a month to get the season");
// Declare a switch statement that checks against the month.
switch (userMonth) {
    // If the month is December - February alert the message : "It's winter".
    case "December":
    case "January":
    case "February":
        alert("It's Winter");
        break;
    // If the month is March - May alert the message : " It's spring".
    case "March":
    case "April":
    case "May":
        alert("It's Spring");
        break;
    // If the month is June - August alert the message : "It's summer".
    case "June":
    case "July":
    case "August":
        alert("It's Summer");
        break;
    // if the month is September - November alert the message : "It's fall".
    case "September":
    case "October":
    case "November":
        alert("It's Fall");
        break;
    // If the user does not enter a valid month alert the message "You did not enter a valid month"
    default :
        alert("You did not enter a valid month");
}