let wins = 0;
let losses = 0;
let ties = 0;

function playGame(humanMove) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    document.getElementById('computer-move').innerText = computerMove;

    let result = '';
    if (humanMove === computerMove) {
        result = "It's a tie!";
        ties++;
    } else if (
        (humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')
    ) {
        result = "You win!";
        wins++;
    } else {
        result = "Computer wins!";
        losses++;
    }

    document.getElementById('result').innerText = result;
    updateStats();
}

function updateStats() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}
