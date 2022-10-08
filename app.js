function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * choices.length)

  return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) return 'Tie Game'
  else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') return 'You Lose, Paper beats Rock'
    else if (computerSelection === 'scissors') return 'You Win, Rock beats Scissors'
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') return 'You Win, Paper beats Rock'
    else if (computerSelection === 'scissors') return 'You Lose, Scissors beats Paper'
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') return 'You Win, Scissors beats Paper'
    else if (computerSelection === 'rock') return 'You Lose, Rock beats Scissors'
  } else {
    return 'Invalid input'
  }
}

const playerSelection = prompt()
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
