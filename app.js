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
  const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

const getStatus = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'RockLizard':
    case 'ScissorsRock':
    case 'LizardRock':
      return 'crushes';

    case 'ScissorsPaper':
    case 'PaperScissors':
      return 'cuts';

    case 'ScissorsLizard':
    case 'LizardScissors':
      return 'decapitates';

    case 'SpockScissors':
    case 'ScissorsSpock':
      return 'smashes';

    case 'SpockRock':
    case 'RockSpock':
      return 'vaporizes';

    case 'LizardSpock':
    case 'SpockLizard':
      return 'poisons';

    case 'LizardPaper':
    case 'PaperLizard':
      return 'eats';

    case 'PaperSpock':
    case 'SpockPaper':
      return 'disproves';

    case 'PaperRock':
    case 'RockPaper':
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

const draw = () => {
  result_p.innerHTML = `It's a draw.`
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'RockLizard':
    case 'ScissorsPaper':
    case 'ScissorsLizard':
    case 'SpockScissors':
    case 'SpockRock':
    case 'LizardSpock':
    case 'LizardPaper':
    case 'PaperSpock':
    case 'PaperRock':
      win(userChoice, computerChoice);
      break;
    case 'Rockspock':
    case 'RockPaper':
    case 'ScissorsRock':
    case 'ScissorsSpock':
    case 'SpockLizard':
    case 'SpockPaper':
    case 'LizardScissors':
    case 'LizardRock':
    case 'PaperLizard':
    case 'PaperScissors':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'ScissorsScissors':
    case 'Spockspock':
    case 'LizardLizard':
    case 'PaperPaper':
      draw(userChoice, computerChoice);
      break;
  }
}

const main = () => {
  rock_div.addEventListener('click', function() {
    game('Rock')
  })
  
  paper_div.addEventListener('click', function() {
    game('Paper')
  })
  
  scissors_div.addEventListener('click', function() {
    game('Scissors')
  })
  
  lizard_div.addEventListener('click', function() {
    game('Lizard')
  })
  
  spock_div.addEventListener('click', function() {
    game('Spock')
  })
}

main();

const date = document.getElementById('date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear