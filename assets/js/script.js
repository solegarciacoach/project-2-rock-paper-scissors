// Const for the rock paper scissors game

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Functions playGame for computer and player choices

function playGame(playerChoice) {

    // Computer random choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // Player and computer choices displayed on screen
    playerDisplay.textContent = `You: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    // Result of playGame displayed on screen
    resultDisplay.textContent = result;

    // Colors for results

    // Restart game after playing
    result.Display.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;

    }

}