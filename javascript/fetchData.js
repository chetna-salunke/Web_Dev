// Create a button and append it to the document body
let btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerHTML = "Click for Joke";

// API endpoint for fetching a random joke
let jokeUrl = "https://official-joke-api.appspot.com/random_joke"; // Use a joke API

// Add an event listener to the button
btn.addEventListener("click", getJoke);
console.log(jokeUrl);

// Function to fetch and display a joke
async function getJoke() {
    let response = await fetch(jokeUrl);
    let newData = await response.json();
    console.log(newData);

    // Create an h1 element to display the joke
    let h1 = document.createElement("h1"); // Corrected variable name
    document.body.appendChild(h1);
    h1.innerHTML = `${newData.setup} - ${newData.punchline}`;
}