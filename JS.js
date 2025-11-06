let Round = 0;
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let Player = document.getElementById("player");
let Computer = document.getElementById("computer");
let Tie = document.getElementById("tie");
let Result = document.getElementById("Result");
const winner = document.getElementById('Winner');
let Input = document.getElementById("choice");
let Button = document.getElementById("btn");
const play_btn = document.getElementById("button");
const choices = document.querySelectorAll(".choice-btn")
Button.addEventListener("click", () => PlayGame());

function getComputerChoice(){
    let List = ['ROCK', 'PAPER', 'SCISSORS'];
let Random = Math.floor(Math.random() * List.length);
 return List[Random];
}
choices.forEach(button =>{
    button.addEventListener('click', () =>{
        switch(button.value){
            case 'Rock':
            case 'Paper':
            case 'Scissors':
            Input.value = button.value;
        }
    })
})
function getHumanChoice(){
    let choice = Input.value.toUpperCase();
    choice = choice.toUpperCase();
    if(choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS'){
        return choice;
    }else{
        alert('Invalid Input');
        return false;     
    }
}
function playRound(humanChoice,computerChoice){
if(humanChoice === computerChoice){
    tieScore++;
    alert('ITs a tie');
    document.getElementById("tie").textContent = tieScore;
    
}else if(
    (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
    (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
    (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
){
    humanScore ++;
    alert('YOU WIN in this round');
    
}else{
    computerScore ++;
    alert('COmputer WIn in this round');
}
}

function PlayGame(){
        const humanSelection = getHumanChoice();
        if(!humanSelection) return;
        console.log(humanSelection);
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    document.getElementById("player").textContent = humanScore;
    document.getElementById("computer").textContent = computerScore;
    Input.value = ''
    Round ++;
    if(Round == 5){
        Input.disabled = true;
        Button.disabled = true;
        play_btn.style.display = 'block'
        Result.textContent = "Game ends"
        
        if(humanScore > computerScore){
             winner.textContent = `Player Win  Score ${humanScore}`
             
         }else if(humanScore < computerScore){
             winner.textContent = `Computer Win  Score ${computerScore}`
         }else{
             winner.textContent = `Tie Scores No Winner`
         }
           
    }   
}
play_btn.addEventListener('click', () =>{ 
        humanScore = 0;  
        computerScore = 0;
        tieScore = 0;
        Round = 0;
    document.getElementById("player").textContent = humanScore;
    document.getElementById("computer").textContent = computerScore;
    document.getElementById("tie").textContent = tieScore;
    Input.disabled = false;
    Button.disabled = false; 
    play_btn.style.display = 'none';
    Result.textContent = '';
    winner.textContent = '';
})




 