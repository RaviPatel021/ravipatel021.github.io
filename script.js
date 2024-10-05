let wins = 0;
let losses = 0;
let ties = 0;

// Store the actions of each round
const actionsLog = [];
const sessionFilename = `session-log-${new Date().toISOString().replace(/:/g, '-')}.csv`;

// Function to initialize the session log
function initializeSessionLog() {
    // Create CSV header
    const csvContent = "data:text/csv;charset=utf-8,";
    const header = "Human Move,Computer Move,Result\n"; // Header

    // Create a blob with the header to initiate the CSV file
    const blob = new Blob([csvContent + header], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", sessionFilename);
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link);
    link.click(); // Start the download
    document.body.removeChild(link); // Clean up
}

// Function to log actions
function logAction(humanMove, computerMove, result) {
    // Append new data to the log
    const row = `${humanMove},${computerMove},${result}\n`;
    const blob = new Blob([row], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", sessionFilename);
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link);
    link.click(); // Start the download
    document.body.removeChild(link); // Clean up
}

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

    // Log the actions to the CSV file continuously
    logAction(humanMove, computerMove, result);

    document.getElementById('result').innerText = result;
    updateStats(); // Call this function to update stats after each round
}

function updateStats() {
    document.getElementById('wins').innerText = `${wins} (${getPercentage(wins)}%)`;
    document.getElementById('losses').innerText = `${losses} (${getPercentage(losses)}%)`;
    document.getElementById('ties').innerText = `${ties} (${getPercentage(ties)}%)`;

    // Calculate total games played
    const totalGames = wins + losses + ties;

    // Set the widths of each segment
    document.getElementById('wins-segment').style.width = getPercentage(wins) + '%';
    document.getElementById('losses-segment').style.width = getPercentage(losses) + '%';
    document.getElementById('ties-segment').style.width = getPercentage(ties) + '%';

    // Ensure the total width is always 100%
    document.getElementById('bar').style.width = '100%'; 
}

function getPercentage(count) {
    const totalGames = wins + losses + ties;
    return totalGames > 0 ? ((count / totalGames) * 100).toFixed(2) : 0;
}

// Initialize the session log at the beginning of the game
initializeSessionLog();
