'use strict';
// global varaibles
let player1Score = 0;
let player2Score = 0;
const range = 50;
//  first chellenge role dice
// geting  elements
const dice = document.querySelector('.dice');
const diceRol = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewgame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let player0CurrentScore = Number(
  document.querySelector('#current--0').textContent
);
let player1CurrentScore = Number(
  document.querySelector('#current--1').textContent
);
let wining = document.querySelectorAll('.player');

// random generator function
const randomGenerator = function () {
  return Math.floor(Math.random() * 6 + 1);
};
// switching active class function
const switchActive = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    if (player1.classList.contains('player--active'))
      player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};
// adding player score function
const playerScore = function (diceNumber) {
  if (player0.classList.contains('player--active')) {
    player0CurrentScore += diceNumber;
    document.querySelector('#current--0').textContent = player0CurrentScore;
  } else if (player1.classList.contains('player--active')) {
    player1CurrentScore += diceNumber;
    document.querySelector('#current--1').textContent = player1CurrentScore;
  }
};

// New Game function
const newGame = function () {
  player1Score = 0;
  player2Score = 0;
  player0CurrentScore = 0;
  player1CurrentScore = 0;
  document.querySelector('#score--0').textContent = player1Score;
  document.querySelector('#current--0').textContent = player0CurrentScore;
  document.querySelector('#score--1').textContent = player2Score;
  player1CurrentScore = 0;
  document.querySelector('#current--1').textContent = player1CurrentScore;
  dice.style.visibility = 'hidden';
  document.querySelector('.winner').textContent = '';
  wining.forEach(function (current) {
    current.style.visibility = 'visible';
  });
  diceRol.style.visibility = 'visible';
  btnHold.style.visibility = 'visible';
};
// adding reset score function
const resetScore = function () {
  if (player0.classList.contains('player--active')) {
    player0CurrentScore = 0;
    player1Score = 0;
    document.querySelector('#score--0').textContent = player1Score;
    document.querySelector('#current--0').textContent = player0CurrentScore;
  } else if (player1.classList.contains('player--active')) {
    player1CurrentScore = 0;
    player2Score = 0;
    document.querySelector('#score--1').textContent = player2Score;
    document.querySelector('#current--1').textContent = player1CurrentScore;
  }
};

// adding event listeners
diceRol.addEventListener('click', function () {
  let diceNumber = randomGenerator();
  dice.style.visibility = 'visible';

  console.log(player1Score, player2Score);
  switch (diceNumber) {
    case 1:
      dice.src = '/starter/dice-1.png';
      resetScore();
      switchActive();
      break;
    case 2:
      dice.src = 'dice-2.png';
      playerScore(diceNumber);
      break;
    case 3:
      dice.src = 'dice-3.png';
      playerScore(diceNumber);
      break;
    case 4:
      dice.src = 'dice-4.png';
      playerScore(diceNumber);
      break;
    case 5:
      dice.src = 'dice-5.png';
      playerScore(diceNumber);
      break;
    case 6:
      dice.src = 'dice-6.png';
      playerScore(diceNumber);
      break;
    default:
      console.log();
  }
});

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player1Score += player0CurrentScore;
    document.querySelector('#score--0').textContent = player1Score;
    player0CurrentScore = 0;
    document.querySelector('#current--0').textContent = player0CurrentScore;
    console.log(player1Score, player2Score);
    if (player1Score >= range) {
      document.querySelector('.winner').textContent = 'Player 1 Wins!';
      wining.forEach(function (current) {
        current.style.visibility = 'hidden';
      });
      diceRol.style.visibility = 'hidden';
      btnHold.style.visibility = 'hidden';
    }

    switchActive();
  } else {
    if (player1.classList.contains('player--active')) {
      player2Score += player1CurrentScore;
      document.querySelector('#score--1').textContent = player2Score;
      player1CurrentScore = 0;
      document.querySelector('#current--1').textContent = player1CurrentScore;
      if (player2Score >= range) {
        document.querySelector('.winner').textContent = 'Player 2 Wins!';
        wining.forEach(function (current) {
          current.style.visibility = 'hidden';
        });
        diceRol.style.visibility = 'hidden';
        btnHold.style.visibility = 'hidden';
      }

      switchActive();
    }
  }
});
btnNewgame.addEventListener('click', function () {
  newGame();
});
