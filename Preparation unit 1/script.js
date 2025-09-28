// Access elements
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const button = document.getElementById("btn");

// Change text when page loads
title.textContent = "Welcome to the DOM demo!";
paragraph.style.color = "blue";

// Add interactivity
button.addEventListener("click", () => {
  paragraph.textContent = "You clicked the button!";
  paragraph.style.fontSize = "20px";
});
