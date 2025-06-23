
let humanScore = 0;
let computerScore = 0;
let Player = document.getElementById("player");
let Computer = document.getElementById("computer");
let Tie = document.getElementById("tie");
let Result = document.getElementById("Result");
let Input = document.getElementById("choice");

function getComputerChoice(){
    let List = ['ROCK', 'PAPER', 'SCISSORS'];
let Random = Math.floor(Math.random() * List.length);
 return List[Random];
}
function getHumanChoice(){
    let choice = prompt('PLease choose (ROCK, PAPER , SCISSORS)');
    if(!choice) return getHumanChoice();
    choice = choice.toUpperCase();
    if(choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS'){
        return choice.toUpperCase();
    }else{
        alert('Invalid Input')
        return getHumanChoice();
    }
}
function playRound(humanChoice,computerChoice){
if(humanChoice === computerChoice){
    alert('Its a Tie');
}else if(
    (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (humanChoice == 'SCISSORS' && computerChoice === 'PAPER')
){
    humanScore ++;
    alert('YOU WIN in this round');
    
}else{
    computerScore ++;
    alert('COmputer WIn in this round');
}
}

function PlayGame(){
    humanScore = 0;
    computerScore = 0;
    for(i = 0; i < 5; i++){
        console.log(`Round${i+1}`);
        const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    document.getElementById("player").textContent = humanScore;
    document.getElementById("computer").textContent = computerScore;
    }
    if(humanScore!==player.textContent){
        Result.textContent = humanScore;
    }
    if(humanScore > computerScore){
        Result.textContent = `You WIN with the Score of ${humanScore}`;
    }else if(humanScore === computerScore){
        Result.textContent = 'Its a Tie';
    }else{
        Result.textContent = `Computer WIN wiht the Score of ${computerScore}`;
    }
}
 
PlayGame();