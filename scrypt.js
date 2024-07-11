

function getComputerChoice() {
    const random = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * random.length);
    return random[randomChoice];
}

function getHumanChoice() {
    var humanChoice = prompt("chose a sign. ").toLowerCase();
    return humanChoice
}


let compScore = 0;
let humScore = 0;

const humanSel = getHumanChoice();
const computerSel = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    
    if ((humanChoice == "rock") && (computerChoice == "rock")) {
        console.log("its a tie")
    } else if ((humanChoice == "paper") && (computerChoice == "paper")) {
        console.log("its a tie")
    } else if ((humanChoice == "scissor") && (computerChoice == "scissor")) {
        console.log("its a tie")
    } else if ((humanChoice == "rock") && (computerChoice == "scissor")) {
        humScore ++;
        console.log("player won, rock beat scissor")
    } else if ((humanChoice == "scissor") && (computerChoice == "paper")) {
        humScore ++;
        rconsole.log("player won, scissor beat paper")
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        humScore ++;
        console.log("player won, paper beat rock")
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        compScore ++;
        console.log("computer won, paper beat rock")
    } else if ((humanChoice == "paper") && (computerChoice == "scissor" )) {
        compScore ++;
        console.log("computer won, scissor beat paper")
    } else if ((humanChoice == "scissor") && (computerChoice == "rock")) {
        compScore ++;
        console.log("computer won, rock beat scissor")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (compScore > humScore) {
        console.log (`you lose! your score: ${humScore}, comp score: ${compScore}`)
    } else if (compScore < humScore) {
        console.log (`you win! your score: ${humScore}, comp score: ${compScore}`)
    }
}

playGame();
 





