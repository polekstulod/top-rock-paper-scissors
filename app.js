function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * choices.length)

  return choices[randomNumber]
}
