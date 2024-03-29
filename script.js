// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return (computerSelection);
}

var computerScore = document.querySelector("#computer-score");
var playerScore = document.querySelector("#player-score");

//Function to play one round of the game
function playRound(playerSelection, computerSelection) {

    // Select Image frame and apply the proper image
    const playerFrame = document.querySelector("#playerChoiceImage");
    const computerFrame = document.querySelector("#computerChoiceImage");
    playerFrame.src = `Assets/${playerSelection}.png`;
    computerFrame.src = `Assets/${computerSelection}.png`;


    //  CASES
    // Tie Case
    if (playerSelection == computerSelection) {


    }
    // Win cases for the player
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
        toggleShake(computerFrame);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
        toggleShake(computerFrame);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
        toggleShake(computerFrame);
    }

    //Lose case for the player
    else {
        computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`;
        toggleShake(playerFrame);
    }

    // Toggling the Modal and showing the result

    if (computerScore.textContent >= '5' || playerScore.textContent >= '5') {
        // document.querySelector('#versus-text').textContent ='Done';
        setTimeout(() => {
            toggleModal()
        }, 100);
        if (computerScore.textContent > playerScore.textContent) {
            document.querySelector('#result-image').src = 'Assets/cry.png';
            document.querySelector('#result-statement').textContent = 'You Lose!';
        }
        if (computerScore.textContent < playerScore.textContent) {
            document.querySelector('#result-image').src = 'Assets/trophy-golden.png';
            document.querySelector('#result-statement').textContent = 'You Win!';
        }
    }

}

// Function to toggle shake animation
function toggleShake(frameName) {
    frameName.classList.toggle('shake');
}

// Function to toggle Modal
function toggleModal() {
    document.querySelector('#modal').classList.toggle('hidden');
    document.querySelector('#main-content').classList.toggle('hidden');
}

// Function to restart
function resetGame() {
    toggleModal();
    computerScore.textContent = `0`;
    playerScore.textContent = `0`;
}

document.querySelector('#replay').addEventListener('click', () => resetGame());

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Playing correct choice on click
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));


// Adding sounds to the website
rock.addEventListener('click', () => document.querySelector("#rock-fx").play());
paper.addEventListener('click', () => document.querySelector("#paper-fx").play());
scissors.addEventListener('click', () => document.querySelector("#scissors-fx").play());

// Making the page-full screen for better UX
const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
  const elem = document.documentElement; // Whole document element
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // Edge
    elem.msRequestFullscreen();
  }
});



// NOTE TO SELF : ADD A TOGGLE FULL SCREEN INSTEAD OF JUST FULL SCREEN