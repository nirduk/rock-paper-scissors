let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_h = document.querySelector('.result > h3')
const robot_h = document.querySelector('.robot > h3')
const player_h = document.querySelector('.player > h3')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')
const lizard_div = document.getElementById('lizard')
const spock_div = document.getElementById('spock')
const robot_div = document.getElementById('computer-choise-preview')
const user_div = document.getElementById('user-choise-preview')

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
  if (choice === 'scissors') return 'Scissors';
  if (choice === 'lizard') return 'Lizard';
  return 'Spock';
}

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  player_h.innerHTML = `You Won!`;
  scoreBoard_div.classList.add('green-glow');
  setTimeout(() => scoreBoard_div.classList.remove('green-glow'), 600);
}

const lose = (userChoice, computerChoice) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  robot_h.innerHTML = `Computer Won!`;
  scoreBoard_div.classList.add('red-glow');
  setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 600);
}

const draw = () => {
  result_h.innerHTML = `It's a draw.`;
  scoreBoard_div.classList.add('yellow-glow');
  setTimeout(() => scoreBoard_div.classList.remove('yellow-glow'), 600);
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  result_h.innerHTML = ``;
  robot_h.innerHTML = `Computer`;
  player_h.innerHTML = `You`;
  user_div.classList.remove('fa-regular', 'fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors', 'fa-hand-lizard', 'fa-hand-spock');
  robot_div.classList.remove('fa-regular', 'fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors', 'fa-hand-lizard', 'fa-hand-spock');

  switch (computerChoice) {
    case 'rock':
      robot_div.classList.add('fa-regular', 'fa-hand-back-fist');
      break;
    case 'paper':
      robot_div.classList.add('fa-regular', 'fa-hand');
      break;
    case 'scissors':
      robot_div.classList.add('fa-regular', 'fa-hand-scissors');
      break;
    case 'lizard':
      robot_div.classList.add('fa-regular', 'fa-hand-lizard');
      break;
    case 'spock':
      robot_div.classList.add('fa-regular', 'fa-hand-spock');
      break;
  }

  switch (userChoice) {
    case 'rock':
      user_div.classList.add('fa-regular', 'fa-hand-back-fist');
      break;
    case 'paper':
      user_div.classList.add('fa-regular', 'fa-hand');
      break;
    case 'scissors':
      user_div.classList.add('fa-regular', 'fa-hand-scissors');
      break;
    case 'lizard':
      user_div.classList.add('fa-regular', 'fa-hand-lizard');
      break;
    case 'spock':
      user_div.classList.add('fa-regular', 'fa-hand-spock');
      break;
  }

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
  scissors_div.addEventListener('click', () => game('scissors'));
  lizard_div.addEventListener('click', () => game('lizard'));
  spock_div.addEventListener('click', () => game('spock'));
}

main();