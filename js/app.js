const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
let gameResult = document.querySelector("#result");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let pScore = 0;
let cScore = 0;
let playerAttackImg = document.querySelector("#playerAttackImg")
let computerAttackImg = document.querySelector("#computerAttackImg")
var recorder
var championIs
var playerPick
var computerPick

function attack(playerChoice) {
    playerPick = playerChoice
    resetSprites()
    for (i = 0; i < choices.length; i++);
    let random = Math.floor(Math.random() * choices.length);
    var compChoice = choices[random];
    computerPick = compChoice

    let record = playerChoice.toUpperCase() + "  vs  " + compChoice.toUpperCase()
    var result = ""
    let champ = ""

    if (playerChoice === compChoice) {
        result += "It's a TIE🪢"
        champ = "both"
    } else if (playerChoice === "rock" && compChoice === "scissors" || 
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
    recorder = record
    championIs = champ
    playerAttack()
    computerAttack()
    playerScore.innerHTML = pScore
    compScore.innerHTML = cScore
    gameResult.innerHTML = result
    history()
}
// ATTACK IMAGE PLAYER
function playerAttack() {
    let playerAttackImg = document.querySelector("#playerAttackImg")
    let attackImg = document.createElement("img")
    attackImg.style.width = "120px"
    attackImg.style.height = "120px"
    if (playerPick === "rock") {
        attackImg.src = "img/handsigns/rock-human.png"
    } else if (playerPick === "paper") {
        attackImg.src = "img/handsigns/paper-human.png"
    } else if (playerPick === "scissors") {
        attackImg.src = "img/handsigns/scissors-human.png"
    }else if (playerPick === "lizard") {
        attackImg.src = "img/handsigns/lizard-human-computer.png"
    }else if (playerPick === "spock") {
        attackImg.src = "img/handsigns/spock-human.png"
    }

    playerAttackImg.appendChild(attackImg)

    if (playerAttackImg.childElementCount > 1) {
        playerAttackImg.removeChild(playerAttackImg.firstElementChild)
    } setTimeout(() => {if (championIs === "computer") { 
        playerAttackImg.removeChild(playerAttackImg.firstElementChild)
    }}, 1500)
}

// ATTACK IMAGE COMPUTER
function computerAttack() {
    let computerAttackImg = document.querySelector("#computerAttackImg")
    let attackImg1 = document.createElement("img")
    attackImg1.style.width = "120px"
    attackImg1.style.height = "120px"
    if (computerPick === "rock") {
        attackImg1.src = "img/handsigns/rock-computer.png"
    } else if (computerPick === "paper") {
        attackImg1.src = "img/handsigns/paper-computer.png"
    } else if (computerPick === "scissors") {
        attackImg1.src = "img/handsigns/scissors-computer.png"
    }else if (computerPick === "lizard") {
        attackImg1.src = "img/handsigns/lizard-computer.png"
    }else if (computerPick === "spock") {
        attackImg1.src = "img/handsigns/spock-computer.png"
    }

    computerAttackImg.appendChild(attackImg1)

    if (computerAttackImg.childElementCount > 1) {
        computerAttackImg.removeChild(computerAttackImg.firstElementChild)
    } setTimeout(() => {if (championIs === "player") { 
        computerAttackImg.removeChild(computerAttackImg.firstElementChild)
    }}, 1500)
}

// MATCH HISTORY RECORD
function history() {
    let matchHistory = document.querySelector("#matchHistory")
    let history = document.createElement("div")
    history.innerHTML = recorder
    history.classList.add("h5", "text-center", "mb-2", "w100")
    if(championIs === "player") {
        history.classList.add("text-success")
    } else if(championIs ==="computer") {
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
function computerLoses() {
    setTimeout(() => {
        computerSprite.src = "img/sprites/computerDie1.gif"
    }, 900)
}
function computerWins() {
    computerSprite.src = "img/sprites/computerAttack1.gif"
    
    setTimeout(() => {
        computerSprite.src="img/sprites/ComputerJump1.gif"
    }, 1000);
}
function playerLoses() {
    setTimeout(() => {
        playerSprite.src = "img/sprites/playerDie1.gif"
    }, 900)
}
function resetSprites() {
    playerSprite.src = "img/sprites/playerIdle1.gif"
    computerSprite.src = "img/sprites/computerIdle1.gif" 
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
