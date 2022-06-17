let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p')
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

const getStatus = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'rocklizard':
    case 'scissorsrock':
    case 'lizardrock':
      return 'crushes';

    case 'scissorspaper':
    case 'paperscissors':
      return 'cuts';

    case 'scissorslizard':
    case 'lizardscissors':
      return 'decapitates';

    case 'spockscissors':
    case 'scissorsspock':
      return 'smashes';

    case 'spockrock':
    case 'rockspock':
      return 'vaporizes';

    case 'lizardspock':
    case 'spocklizard':
      return 'poisons';

    case 'lizardpaper':
    case 'paperlizard':
      return 'eats';

    case 'paperspock':
    case 'spockpaper':
      return 'disproves';

    case 'paperrock':
    case 'rockpaper':
      return 'covers';
  }
}

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} ${getStatus(userChoice, computerChoice)} ${computerChoice}. </br>You win!`
}

const lose = (userChoice, computerChoice) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${computerChoice} ${getStatus(userChoice, computerChoice)} ${userChoice}. </br>You lose!`
}

const draw = (userChoice, computerChoice) => {
  result_p.innerHTML = `it's a draw.`
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
      win(userChoice, computerChoice);
      break;
    case 'rockspock':
    case 'rockpaper':
    case 'scissorsrock':
    case 'scissorsspock':
    case 'spocklizard':
    case 'spockpaper':
    case 'lizardscissors':
    case 'lizardrock':
    case 'paperlizard':
    case 'paperscissors':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'spockspock':
    case 'lizardlizard':
    case 'paperpaper':
      draw(userChoice, computerChoice);
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