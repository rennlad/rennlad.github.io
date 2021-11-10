const gameContainer = document.getElementById("game-container");
const resultContainer = document.getElementById("result-container");
const winnerContainer = document.getElementById("winner");
const submitButton = document.getElementById("submit-button")
const userChoice = document.getElementById("user-choice")
let winner = "";





// Method for making random choice for computer
const chooseRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}



// Method for choosing the winner
const chooseWinner = (humanChoice, computerChoice) => {

    console.log("running");
    console.log(humanChoice);
    console.log(computerChoice);

    // User chooses Rock
    if (humanChoice == 1) {
        if (computerChoice == 1) {
            winner = "It's a draw";
        } else if (computerChoice == 2) {
            winner = "User wins!!";
        } else if (computerChoice == 3) {
            winner = "Computer wins!!";
        }

    // User chooses Paper
    } else if (humanChoice == 2) {
        if (computerChoice == 2) {
            winner = "It's a draw";
        } else if (computerChoice == 3) {
            winner = "User wins!!";
        } else if (computerChoice == 1) {
            winner = "Computer wins!!";
        }

    // User choose Scissors
    } else if (humanChoice == 3) {
        if (computerChoice == 3) {
            winner = "It's a draw";
        } else if (computerChoice == 1) {
            winner = "User wins!!";
        } else if (computerChoice == 2) {
            winner = "Computer wins!!";
        }
    }
    
}




submitButton.addEventListener("click", e => {
    // Prevent page from refreshing
    e.preventDefault();

    // Hide the game container
    gameContainer.style.display = "none";

    // Get computer choice
    let computerChoice = chooseRandomNumber();

    // Calculate winner
    chooseWinner(userChoice.value, computerChoice);

    // Set value of Match
    winnerContainer.innerHTML = winner;



    // Display the results container
    resultContainer.style.display = "block";
});