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

const makeFirstLetterBig = (choice) => {
  if (choice === 'rock') return 'Rock';
  if (choice === 'paper') return 'Paper';
  if (choice === 'scisors') return 'Scissors';
  if (choice === 'lizard') return 'Lizard';
  return 'Spock'
}

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${makeFirstLetterBig(userChoice)} ${getStatus(userChoice, computerChoice)} ${makeFirstLetterBig(computerChoice)}. </br>You win!`;
  scoreBoard_div.classList.add('green-glow');
  setTimeout(() => scoreBoard_div.classList.remove('green-glow'), 300);
}

const lose = (userChoice, computerChoice) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${makeFirstLetterBig(computerChoice)} ${getStatus(userChoice, computerChoice)} ${makeFirstLetterBig(userChoice)}. </br>You lose!`
  scoreBoard_div.classList.add('red-glow');
  setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 300);


}

const draw = () => {
  result_p.innerHTML = `It's a draw.`
  scoreBoard_div.classList.add('yellow-glow');
  setTimeout(() => scoreBoard_div.classList.remove('yellow-glow'), 300);
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
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissor'));
  lizard_div.addEventListener('click', () => game('lizard'));
  spock_div.addEventListener('click', () => game('spock'));
}

main();

const date = document.getElementById('date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear