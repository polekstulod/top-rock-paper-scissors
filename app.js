function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * choices.length)

  return choices[randomNumber]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) console.log('Tie game 😐')
  else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log('You Lose 😔, Paper beats Rock')
      return 'computer'
    } else if (computerSelection === 'scissors') {
      console.log('You Win 😁, Rock beats Scissors')
      return 'player'
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log('You Win 😁, Paper beats Rock')
      return 'player'
    } else if (computerSelection === 'scissors') {
      console.log('You Lose 😔, Scissors beats Paper')
      return 'computer'
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      console.log('You Win 😁, Scissors beats Paper')
      return 'player'
    } else if (computerSelection === 'rock') {
      console.log('You Lose 😔, Rock beats Scissors')
      return 'computer'
    }
  } else {
    console.log('Invalid input ❌')
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

rockBtn.addEventListener('click', () => {
  alert(`${playRound('Rock', getComputerChoice())} wins`)
})

paperBtn.addEventListener('click', () => {
  alert(`${playRound('Rock', getComputerChoice())} wins`)
})

scissorsBtn.addEventListener('click', () => {
  alert(`${playRound('Rock', getComputerChoice())} wins`)
})
