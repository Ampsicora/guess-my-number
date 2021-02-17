'use strict';

let correctNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  guess();
});

document.querySelector('.again').addEventListener('click', function () {
  playAgain();
});

function guess() {
  const guessNumber = Number(document.querySelector('.guess').value);

  document.querySelector('.message').textContent = isGuessNumberRight(
    guessNumber
  );
}

function isGuessNumberRight(guessNumber) {
  if (!guessNumber) return `⛔ Insert a valid number! ᓚᘏᗢ`;
  else if (guessNumber < correctNumber) {
    decreaseScore();
    return score === 0 ? gameOver() : `Too low! ¯\_(ツ)_/¯`;
  } else if (guessNumber > correctNumber) {
    decreaseScore();
    return score === 0 ? gameOver() : `Too high! ¯\_(ツ)_/¯`;
  } else {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('.check').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    return `🎉 The number is correct! (☞ﾟヮﾟ)☞`;
  }
}

function playAgain() {
  correctNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.check').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
}

function decreaseScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function gameOver() {
  document.querySelector('.check').disabled = true;
  document.querySelector('body').style.backgroundColor = '#ec4646';
  return `You lose! ಥ_ಥ`;
}
