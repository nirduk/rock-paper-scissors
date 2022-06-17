const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('copmuterr-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')
const lizard_div = document.getElementById('lizard')
const spock_div = document.getElementById('spock')

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'rocklizard':
    case 'scissorspaper':
    case 'scissorslizard':
    case 'spockscissors':
    case 'spockrock':
    case 'lizardspock':
    case 'lizardpaper':
    case 'paperspock':
    case 'paperrock':
      console.log('user wins');
      break;
    case 'rockscissors':
    case 'rocklizard':
    case 'scissorspaper':
    case 'scissorslizard':
    case 'spockscissors':
    case 'spockrock':
    case 'lizardspock':
    case 'lizardpaper':
    case 'paperspock':
    case 'paperrock':
      console.log('user loses');
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'spockspock':
    case 'lizardlizard':
    case 'paperpaper':
      console.log("it's a draw");
      break;
  }
}

const main = () => {
  rock_div.addEventListener('click', function() {
    game('rock')
  })
  
  paper_div.addEventListener('click', function() {
    game('paper')
  })
  
  scissors_div.addEventListener('click', function() {
    game('scissors')
  })
  
  lizard_div.addEventListener('click', function() {
    game('lizard')
  })
  
  spock_div.addEventListener('click', function() {
    game('spock')
  })
}

main();

const date = document.getElementById('date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear