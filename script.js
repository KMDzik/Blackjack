//Card variables

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 
              'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
              'Five', 'Four','Three', 'Two'];

//DOM variables
let textArea = document.getElementById('text-area');
    nameGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  dealerCards = [ getNextCard(), getNextCard()];
  playerCards = [ getNextCard(), getNextCard()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});