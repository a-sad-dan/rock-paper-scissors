// Function to get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return (computerSelection);
}

//Function to play one round of the game
function playRound(playerSelection, computerSelection) {
    // Tie Case
    if (playerSelection == computerSelection) {
        return (`It's a tie. Both chose ${computerSelection}`);
    }
    // Win cases for the player
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return (`You Win! ${playerSelection} defeats ${computerSelection}`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return (`You Win! ${playerSelection} defeats ${computerSelection}`);
    } else if(playerSelection==='Scissors' && computerSelection==='Paper'){
        return(`You Win! ${playerSelection} defeats ${computerSelection}`);
    }
    //Lose case for the player
    else {
        return(`You Lose! ${computerSelection} defeats ${playerSelection}`);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");




const resultsDiv = document.querySelector('#results');
const resultStatement = document.createElement('p');


rock.addEventListener('click',()=>showTextResult(resultsDiv,resultStatement,playRound('Rock',getComputerChoice())));
paper.addEventListener('click',()=>showTextResult(resultsDiv,resultStatement,playRound('Paper',getComputerChoice())));
scissors.addEventListener('click',()=>showTextResult(resultsDiv,resultStatement,playRound('Scissors',getComputerChoice())));

// Function to  change the text of the paragraph

function showTextResult(parentNode,paragraph_Element,Statement){
    paragraph_Element.textContent = `${Statement}`
    parentNode.appendChild(paragraph_Element);
}
