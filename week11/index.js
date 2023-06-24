const cells = Array.from(document.getElementsByClassName('cell'));
const turnHeading = document.getElementById('turn-heading');
const restartButton = document.querySelector('button');
const winnerAlert = document.getElementById('winner-alert');
const lines = document.getElementsByClassName('line');

let currentPlayer = 'X';
let moves = 0;
let gameEnded = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(index) {
  if (!gameEnded && !cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    moves++;

    if (checkWin(currentPlayer)) {
      endGame(currentPlayer + ' wins!');
      const winningCombination = getWinningCombination(currentPlayer);
      drawWinningLine(winningCombination);
    } else if (moves === 9) {
      endGame('Draw!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turnHeading.textContent = "Player " + currentPlayer + "'s Turn";
    }
  }
}

function checkWin(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => cells[index].textContent === player);
  });
}

function getWinningCombination(player) {
  return winningCombinations.find(combination => {
    return combination.every(index => cells[index].textContent === player);
  });
}

function drawWinningLine(combination) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.setProperty('--start-cell', combination[0]);
  line.style.setProperty('--end-cell', combination[2]);
  document.getElementById('game-grid').appendChild(line);
}

function endGame(message) {
  gameEnded = true;
  winnerAlert.textContent = message;
  winnerAlert.classList.remove('hide');
}

function restartGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  moves = 0;
  gameEnded = false;
  turnHeading.textContent = "Player X's Turn";
  winnerAlert.textContent = '';
  winnerAlert.classList.add('hide');
  removeWinningLine();
}

function removeWinningLine() {
  const line = document.getElementsByClassName('line')[0];
  if (line) {
    line.parentNode.removeChild(line);
  }
}

restartButton.addEventListener('click', restartGame);
