function playGame(humanMove) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    document.getElementById('computer-move').innerText = computerMove;

    let result = '';
    if (humanMove === computerMove) {
        result = "It's a tie!";
    } else if (
        (humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById('result').innerText = result;
}
