function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * choices.length)

  return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) return 'Tie game 😐'
  else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You Lose 😔, Paper beats Rock'
    } else if (computerSelection === 'scissors') {
      return 'You Win 😁, Rock beats Scissors'
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You Win 😁, Paper beats Rock'
    } else if (computerSelection === 'scissors') {
      return 'You Lose 😔, Scissors beats Paper'
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 'You Win 😁, Scissors beats Paper'
    } else if (computerSelection === 'rock') {
      return 'You Lose 😔, Rock beats Scissors'
    }
  } else {
    return 'Invalid input ❌'
  }
}

function updateScore(outputResult) {
  if (outputResult === 'W') playerScore++
  else if (outputResult === 'L') computerScore++

  score.textContent = `
  You: ${playerScore}
  Computer: ${computerScore}
  `

  if (playerScore < 5 && computerScore < 5) return
  else if (playerScore === 5) gameResult.textContent = 'You Win this game 🥳'
  else if (computerScore === 5) gameResult.textContent = 'You Lose this game 😭, Try Again!'

  rockBtn.disabled = true
  paperBtn.disabled = true
  scissorsBtn.disabled = true

  const restart = document.createElement('button')
  restart.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Restart Game'
  restart.classList.toggle('btn')
  restart.onclick = () => window.location.reload()
  resultDiv.appendChild(restart)
}

const rockBtn = document.querySelector('#rock-btn')
const paperBtn = document.querySelector('#paper-btn')
const scissorsBtn = document.querySelector('#scissors-btn')
const result = document.querySelector('#result')
const score = document.querySelector('#score')
const gameResult = document.querySelector('#game-result')
const resultDiv = document.querySelector('#result-div')
const restartBtn = document.querySelector('#restart-btn')

let playerScore = 0
let computerScore = 0

rockBtn.addEventListener('click', () => {
  const outputResult = playRound('Rock', getComputerChoice())
  result.textContent = ''
  result.textContent = outputResult
  updateScore(outputResult[4])
})

paperBtn.addEventListener('click', () => {
  const outputResult = playRound('Paper', getComputerChoice())
  result.textContent = ''
  result.textContent = outputResult
  updateScore(outputResult[4])
})

scissorsBtn.addEventListener('click', () => {
  const outputResult = playRound('Scissors', getComputerChoice())
  result.textContent = ''
  result.textContent = outputResult
  updateScore(outputResult[4])
})
