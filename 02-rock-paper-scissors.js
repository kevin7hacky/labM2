let userChoice = prompt("Choose rock, paper, or scissors:");

if (userChoice) {
  userChoice = userChoice.toLowerCase();
}


let randomNumber = Math.floor(Math.random() * 3);
let computerChoice;

if (randomNumber === 0) {
  computerChoice = "rock";
} else if (randomNumber === 1) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}


if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"
) {
  alert("Invalid choice! Please enter rock, paper, or scissors.");
} else {

  if (userChoice === computerChoice) {
    alert(
      "It's a tie! You both chose " + computerChoice + "."
    );
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    alert("You win! " + userChoice + " beats " + computerChoice + ".");
  } else {
    alert("Computer wins! " + computerChoice + " beats " + userChoice + ".");
  }
}
