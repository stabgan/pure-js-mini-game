const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const START = document.getElementById('start');
const SCORE_DISPLAY = document.getElementById('score');

const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;

const ROCKS = [];
let score = 0;
let gameInterval = null;

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top);

  // rocks are 20px high, dodger is 20px high
  // collision zone: GAME_HEIGHT - 20 - 20 = 360px
  if (top > 360) {
    const dodgerLeft = positionToInteger(DODGER.style.left);
    const dodgerRight = dodgerLeft + 40;
    const rockLeft = positionToInteger(rock.style.left);
    const rockRight = rockLeft + 20;

    return (rockLeft < dodgerRight && rockRight > dodgerLeft);
  }

  return false;
}

function createRock(x) {
  const rock = document.createElement('div');
  rock.className = 'rock';
  rock.style.left = `${x}px`;

  let top = 0;
  rock.style.top = '0px';
  let scored = false;

  GAME.appendChild(rock);
  ROCKS.push(rock);

  function moveRock() {
    top += 2;
    rock.style.top = `${top}px`;

    if (checkCollision(rock)) {
      return endGame();
    }

    // Score once per rock when it passes the dodger zone
    if (!scored && top > 380) {
      scored = true;
      score += 1;
      updateScore();
    }

    if (top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRock);
    } else {
      rock.remove();
      const idx = ROCKS.indexOf(rock);
      if (idx > -1) {
        ROCKS.splice(idx, 1);
      }
    }
  }

  window.requestAnimationFrame(moveRock);
  return rock;
}

function endGame() {
  clearInterval(gameInterval);
  gameInterval = null;

  // Remove all active rocks
  for (let i = ROCKS.length - 1; i >= 0; i--) {
    ROCKS[i].remove();
  }
  ROCKS.length = 0;

  document.removeEventListener('keydown', moveDodger);

  START.textContent = `Game Over! Score: ${score}. Play again?`;
  START.style.display = 'inline';

  alert(`YOU LOSE! Final score: ${score}`);
  score = 0;
  updateScore();
}

function moveDodger(e) {
  const key = e.key;

  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    e.preventDefault();
    e.stopPropagation();
  }

  if (key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (key === 'ArrowRight') {
    moveDodgerRight();
  }
}

function moveDodgerLeft() {
  window.requestAnimationFrame(function () {
    const left = positionToInteger(DODGER.style.left);
    if (left > 0) {
      DODGER.style.left = `${left - 10}px`;
    }
  });
}

function moveDodgerRight() {
  window.requestAnimationFrame(function () {
    const left = positionToInteger(DODGER.style.left);
    if (left < GAME_WIDTH - 40) {
      DODGER.style.left = `${left + 10}px`;
    }
  });
}

function positionToInteger(p) {
  return parseInt(p, 10) || 0;
}

function updateScore() {
  SCORE_DISPLAY.textContent = `Score: ${score}`;
}

function start() {
  // Reset dodger position
  DODGER.style.left = '180px';

  document.addEventListener('keydown', moveDodger);
  START.style.display = 'none';

  score = 0;
  updateScore();

  gameInterval = setInterval(function () {
    createRock(Math.floor(Math.random() * (GAME_WIDTH - 20)));
  }, 1000);
}

// Use event listener instead of inline javascript: href
START.addEventListener('click', start);
