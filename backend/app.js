let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const outcome = document.getElementById('outcome');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

getComputerChoice();

function game(userChoice){
    const computerChoice = getComputerChoice();
    if(computerChoice === userChoice){
        console.log('It\'s a draw!');
        outcome.innerHTML = 'It\'s a draw!';
    }
    else if(computerChoice === 'r' && userChoice === 'p'){
        console.log('Paper beats rock. You win!');
        outcome.innerHTML = 'Paper beats rock. You win!';
        userScore++;
        userScore_span.innerHTML = userScore;
    }
    else if(computerChoice === 'p' && userChoice === 'r'){
        console.log('Rock loses to paper. You lost.');
        outcome.innerHTML = 'Rock loses to paper. You lost.';
        computerScore++;
        computerScore_span.innerHTML = computerScore;
    }
    else if(computerChoice === 'r' && userChoice === 's'){
        console.log('Rock beats scissors. You lose.');
        outcome.innerHTML = 'Rock beats scissors. You lose.';
        computerScore++;
        computerScore_span.innerHTML = computerScore;
    }
    else if(computerChoice === 's' && userChoice === 'r'){
        console.log('Rock beats scissors. You win!');
        outcome.innerHTML = 'Rock beats scissors. You win!';
        userScore++;
        userScore_span.innerHTML = userScore;
    }
    else if(computerChoice === 's' && userChoice === 'p'){
        console.log('Scissors beats paper. You lost!');
        outcome.innerHTML = 'Scissors beats paper. You lost!';
        computerScore++;
        computerScore_span.innerHTML = computerScore;
    }
    else if(computerChoice === 'p' && userChoice === 's'){
        console.log('Scissors beats paper. You won!');
        outcome.innerHTML = 'Scissors beats paper. You won!';
        userScore++;
        userScore_span.innerHTML = userScore;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game('r')
    })
    
    paper_div.addEventListener('click', function(){
        game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        game('s');
    })
    
}

main();