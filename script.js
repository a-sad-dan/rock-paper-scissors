// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return (computerSelection);
}

//Function to play one round of the game
function playRound(playerSelection, computerSelection) {
    // Tie Case
    if (playerSelection == computerSelection) {
        return 0;
    }
    // Win cases for the player
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {return 1;}
     else if (playerSelection === 'paper' && computerSelection === 'rock') {return 1;}
     else if (playerSelection === 'scissors' && computerSelection === 'paper') {return 1;}

    //Lose case for the player
    else {
        return 0;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerFrame = document.querySelector("#playerChoiceImage")
const computerFrame = document.querySelector("#computerChoiceImage")


rock.addEventListener('click', () => {
    changeImage(playerFrame, 'rock');
    changeImage(computerFrame,getComputerChoice());
});
paper.addEventListener('click', () => {
    changeImage(playerFrame, 'paper');
    changeImage(computerFrame,getComputerChoice());
});
scissors.addEventListener('click', () => {
    changeImage(playerFrame, 'scissors');
    changeImage(computerFrame,getComputerChoice());
});




// Function to change the image shown in selected window

function changeImage(elementName, imageName) {
    elementName.src = `Assets/${imageName}.png`;
}