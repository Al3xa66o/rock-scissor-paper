let computerPoint = 0;
let humanPoint = 0;

function getComputerChoice () {
    let numRandom = Math.floor(Math.random() * 3)

    if (numRandom == 1) {
        console.log("rock");
    }
    else if (numRandom == 2) {
        console.log("scissor");
    }
    else if (numRandom == 3) {
        console.log("paper");
    }
}

function getHumanChoice () {
    let choice = prompt("chose a sign.");

    console.log("you chosen: " + choice);
}