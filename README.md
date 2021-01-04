# 21 01 04 JS "Catch All" Practice

Add comments above each exercise solution (at minium). HTML and JS files have already been included in the assignment. Push after completing each exercise. Comment out any broken code before 9PM submission and provide context on what's not working. 

## Review 
Declare an empty array. In the browser, prompt to add an element to the array until "q" is entered. Once "q" has been entered iterate through all elements in the array, outputting each element in the console. 

## Scope 

What will output to the console from the code snippet below.
```JS
let exampleVariable;
exampleVariable = "Hello";
function updateValue() {
    let exampleVariable = "World";
    console.log(exampleVariable);
}
console.log(exampleVariable);
updateValue();
```

Explain your answer below : 
```
You answer here!
```

## Try Catch 

Declare a function `alertName` that accepts one parameter and outputs the message : "Hello PARAMETER". Prompt the user to enter their name and save the returned value in a variable. Call the function `alertName` in a try block passing in the prompted user name. Catch potential errors and display them in the console. Use a finally block the output the message "Function Alert Name has run" in the console. Comment out your prompt to generate errors and ensure that the catch block works. 

## Switch Statement 
Prompt the user to enter a month of the year. Declare a switch statement that checks against the month. If the month is December - February alert the message : "It's winter". If the month is March - May alert the message : " It's spring". If the month is June - August alert the message : "It's summer". And if the month is September - November alert the message : "It's fall". If the user does not enter a valid month alert the message "You did not enter a valid month"
