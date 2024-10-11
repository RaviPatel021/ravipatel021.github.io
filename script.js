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
    updateStats(); // Call this function to update stats after each round
}

function updateStats() {
    document.getElementById('wins').innerText = wins;   // Update wins
    document.getElementById('losses').innerText = losses; // Update losses
    document.getElementById('ties').innerText = ties;    // Update ties

    // Calculate total games played
    const totalGames = wins + losses + ties;

    // Calculate percentages
    const winsPercentage = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(2) : 0;
    const lossesPercentage = totalGames > 0 ? ((losses / totalGames) * 100).toFixed(2) : 0;
    const tiesPercentage = totalGames > 0 ? ((ties / totalGames) * 100).toFixed(2) : 0;

    // Set the widths of each segment
    document.getElementById('wins-segment').style.width = winsPercentage + '%';
    document.getElementById('losses-segment').style.width = lossesPercentage + '%';
    document.getElementById('ties-segment').style.width = tiesPercentage + '%';
    
    // Update the stats with percentages
    document.getElementById('wins').innerText = `${wins} (${winsPercentage}%)`;
    document.getElementById('losses').innerText = `${losses} (${lossesPercentage}%)`;
    document.getElementById('ties').innerText = `${ties} (${tiesPercentage}%)`;

    // Ensure the total width is always 100%
    document.getElementById('bar').style.width = '100%'; 
}
