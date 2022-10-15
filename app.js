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

/* function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt()
    const computerSelection = getComputerChoice()

    const winner = playRound(playerSelection, computerSelection)

    if (winner === 'player') playerScore++
    else if (winner === 'computer') computerScore++

    console.log(`You: ${playerScore}\nComputer: ${computerScore}`)
  }

  if (playerScore === computerScore) console.log('Game Tied 😑')
  else console.log(playerScore > computerScore ? 'You Win this game 🥳' : 'You Lose this game 😭')
}

game()
 */

const rockBtn = document.querySelector('#rock-btn')
const paperBtn = document.querySelector('#paper-btn')
const scissorsBtn = document.querySelector('#scissors-btn')
const result = document.querySelector('#result')

rockBtn.addEventListener('click', () => {
  result.textContent = ''
  result.textContent = playRound('Rock', getComputerChoice())
})

paperBtn.addEventListener('click', () => {
  result.textContent = ''
  result.textContent = playRound('Paper', getComputerChoice())
})

scissorsBtn.addEventListener('click', () => {
  result.textContent = ''
  result.textContent = playRound('Scissors', getComputerChoice())
})
