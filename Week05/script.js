// Week 5: JavaScript Basics Demo

// 1. Adding Comments
// This is a single-line comment
/* This is a
   multi-line comment */

// 2. Variables and Scopes
let greeting = "Hello"; // block-scoped variable
const userName = "Coder"; // constant
var legacyVar = "I'm older JS"; // function-scoped (not recommended)

// 3. Data Types
let number = 42;
let isLearning = true;
let undefinedValue;
let nullValue = null;

// 4. Operators
let sum = number + 8;
let isEven = number % 2 === 0;

// 5. Conditional Statements
let experience = 1;
let level = "";
if (experience < 1) {
  level = "Beginner";
} else if (experience < 3) {
  level = "Intermediate";
} else {
  level = "Advanced";
}

// 6. Iterative Statements
let skills = ["Variables", "Operators", "Loops", "Functions"];
let skillsList = "";
for (let i = 0; i < skills.length; i++) {
  skillsList += `• ${skills[i]}<br>`;
}

// 7. String Methods & Templates
let welcomeMessage = greeting.toUpperCase() + " " + userName;
let templateMessage = `Welcome, ${userName}! You are at ${level} level.`;

// Displaying all info
document.getElementById("output").innerHTML = `
  <strong>${welcomeMessage}</strong><br><br>
  ${templateMessage}<br><br>
  Sum: ${sum} <br>
  Is number even? ${isEven} <br><br>
  <strong>Skills Covered:</strong><br>
  ${skillsList}
`;

// 8. Button Click Function
function handleClick() {
  alert("✨ You clicked the animated button! Keep coding!");
}
