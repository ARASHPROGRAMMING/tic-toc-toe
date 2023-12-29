let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function printBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('ticTacToe').rows[i].cells[j].innerHTML = gameBoard[i][j];
        }
    }
}

function checkWinner() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== '') {
            return gameBoard[i][0];
        }
        if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] !== '') {
            return gameBoard[0][i];
        }
    }

    // Check diagonals
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== '') {
        return gameBoard[0][0];
    }
    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== '') {
        return gameBoard[0][2];
    }

    return null;
}

function isBoardFull() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function cellClicked(row, col) {
    if (gameBoard[row][col] === '' && !checkWinner() && !isBoardFull()) {
        gameBoard[row][col] = currentPlayer;
        printBoard();

        let winner = checkWinner();
        if (winner) {
            alert(`Player ${winner} wins!`);
        } else if (isBoardFull()) {
            alert("It's a tie!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

printBoard();