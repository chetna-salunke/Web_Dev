// Create the heading
let heading = document.createElement("h1");
heading.textContent = "Sum";
document.body.appendChild(heading);

// Create buttons for each number and operator
let num1Button = document.createElement("button");
num1Button.textContent = "1 ";
document.body.appendChild(num1Button);

let numButton = document.createElement("button");
numButton.textContent = "+ ";
document.body.appendChild(numButton);

let num2Button = document.createElement("button");
num2Button.textContent = "2 ";
document.body.appendChild(num2Button);

let sumButton = document.createElement("button");
sumButton.textContent = "= ";
document.body.appendChild(sumButton);

// Create a result display
let result = document.createElement("h2");
result.textContent = "";
document.body.appendChild(result);

// Variables to hold the numbers and operator
let num1 = 1;
let num2 = 2;
let operator = "";

// Event listeners for the number buttons and operator
num1Button.addEventListener("click", () => {
    num1 = 1; // Set num1 to 1
    result.textContent = 1;
});

numButton.addEventListener("click", () => {
    operator = "+"; // Set operator to "+"
    result.textContent = `1+`;
});

num2Button.addEventListener("click", () => {
    num2 = 2; // Set num2 to 2
    result.textContent = ` 1+2`;
});

// Event listener for the "=" button to calculate the result
sumButton.addEventListener("click", () => {
    if (num1 && num2 && operator) {
        let calculatedResult = num1 + num2;
        result.textContent = `1+2=3`;
    } 
});