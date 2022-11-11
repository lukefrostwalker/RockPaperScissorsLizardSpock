const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
let gameResult = document.querySelector("#result");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let pScore = 0;
let cScore = 0;
let playerAttackImg = document.querySelector("#playerAttackImg")
let computerAttackImg = document.querySelector("#computerAttackImg")


function attack(playerChoice) {
    resetSprites()
    for (i = 0; i < choices.length; i++);
    let random = Math.floor(Math.random() * choices.length);
    var compChoice = choices[random];
    // console.log(compChoice)
    let result = ""
    let champ = ""


if (playerChoice === compChoice) {
    result += "It's a TIE🪢"
    champ = "both"
} 
else if (playerChoice === "rock" && compChoice === "scissors" || 
         playerChoice === "rock" && compChoice === "lizard" ||
         playerChoice === "paper" && compChoice === "rock" || 
         playerChoice === "paper" && compChoice === "spock" ||
         playerChoice === "scissors" && compChoice === "paper" || 
         playerChoice === "scissors" && compChoice === "lizard" ||
         playerChoice === "lizard" && compChoice === "paper" || 
         playerChoice === "lizard" && compChoice === "spock" ||
         playerChoice === "spock" && compChoice === "rock" || 
         playerChoice === "spock" && compChoice === "scissors") {
    result += "WINNER😏"
    champ = "player"
    playerWins()
    computerLoses()
    pScore++
} else {
    result += "LOSER😞"
    champ = "computer"
    computerWins()
    playerLoses()
    cScore++
}
    // console.log(playerChoice)
    // console.log(compChoice)
    // console.log(result)
    playerScore.innerHTML = pScore
    compScore.innerHTML = cScore
    gameResult.innerHTML = result
    // setTimeout(() => {gameResult.innerHTML = result}, 1500)
    // setTimeout(() => {gameResult.innerHTML = "Fight"}, 4500)


// ATTACK IMAGE PLAYER
    let playerAttackImg = document.querySelector("#playerAttackImg")
    let attackImg = document.createElement("img")
    attackImg.style.width = "120px"
    attackImg.style.height = "120px"
    if (playerChoice === "rock") {
        attackImg.src = "img/handsigns/rock-human.png"
    } else if (playerChoice === "paper") {
        attackImg.src = "img/handsigns/paper-human.png"
    } else if (playerChoice === "scissors") {
        attackImg.src = "img/handsigns/scissors-human.png"
    }else if (playerChoice === "lizard") {
        attackImg.src = "img/handsigns/lizard-human-computer.png"
    }else if (playerChoice === "spock") {
        attackImg.src = "img/handsigns/spock-human.png"
    }

    playerAttackImg.appendChild(attackImg)

    if (playerAttackImg.childElementCount > 1) {
        playerAttackImg.removeChild(playerAttackImg.firstElementChild)
    } setTimeout(() => {if (champ === "computer") { 
        playerAttackImg.removeChild(playerAttackImg.firstElementChild)
    }}, 1500)

// ATTACK IMAGE COMPUTER
let computerAttackImg = document.querySelector("#computerAttackImg")
    let attackImg1 = document.createElement("img")
    attackImg1.style.width = "120px"
    attackImg1.style.height = "120px"
    if (compChoice === "rock") {
        attackImg1.src = "img/handsigns/rock-computer.png"
    } else if (compChoice === "paper") {
        attackImg1.src = "img/handsigns/paper-computer.png"
    } else if (compChoice === "scissors") {
        attackImg1.src = "img/handsigns/scissors-computer.png"
    }else if (compChoice === "lizard") {
        attackImg1.src = "img/handsigns/lizard-computer.png"
    }else if (compChoice === "spock") {
        attackImg1.src = "img/handsigns/spock-computer.png"
    }

    computerAttackImg.appendChild(attackImg1)

    if (computerAttackImg.childElementCount > 1) {
        computerAttackImg.removeChild(computerAttackImg.firstElementChild)
    } setTimeout(() => {if (champ === "player") { 
        computerAttackImg.removeChild(computerAttackImg.firstElementChild)
    }}, 1500)

    
// MATCH HISTORY RECORD
    let record = playerChoice.toUpperCase() + "  vs  " + compChoice.toUpperCase()

    let matchHistory = document.querySelector("#matchHistory")
    let history = document.createElement("div")
    history.innerHTML = record
    history.classList.add("h5", "text-center", "mb-2", "w100")
    if(champ === "player") {
        history.classList.add("text-success")
    } else if(champ ==="computer") {
        history.classList.add("text-danger")
    } else history.classList.add("text-secondary")

    matchHistory.appendChild(history)

    if(matchHistory.childElementCount > 5){
        matchHistory.removeChild(matchHistory.firstElementChild);
    }

    
}
let playerSprite = document.querySelector("#playerSprite")
let computerSprite = document.querySelector("#computerSprite")

function playerWins() {
    playerSprite.src = "img/sprites/playerAttack1.gif"

    setTimeout(() => {
        playerSprite.src="img/sprites/playerJump1.gif"
    }, 1000);
}
function computerWins() {
    computerSprite.src = "img/sprites/computerAttack1.gif"
    
    setTimeout(() => {
        computerSprite.src="img/sprites/ComputerJump1.gif"
    }, 1000);
}
function resetSprites() {
    playerSprite.src = "img/sprites/playerIdle1.gif"
    computerSprite.src = "img/sprites/computerIdle1.gif" 
}
function playerLoses() {
    setTimeout(() => {
        playerSprite.src = "img/sprites/playerDie1.gif"
    }, 900)
}
function computerLoses() {
    setTimeout(() => {
        computerSprite.src = "img/sprites/computerDie1.gif"
    }, 900)
}
function reset() {
    matchHistory.innerHTML = ""
    playerScore.innerHTML = 0
    compScore.innerHTML = 0
    playerAttackImg.innerHTML = ""
    computerAttackImg.innerHTML = ""
    gameResult.innerHTML = "CHOOSE A MOVE TO START"
    resetSprites()
}
// let matchHistory = document.querySelector("matchHistory")
// let record = playerChoice + compChoice
// console.log(record)
