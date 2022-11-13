const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; //When starting the game no card has been flipped yet.
let firstCard, secondCard; // First clicked card and second clicked card in order to check for match
let lockBoard = false;  
const moveCounter = document.querySelector(".moves"); 


/* flipCard function with help from https://github.com/code-sketch/memory-game*/
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    /*If hasFlippedCard is false, execute the following */
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

/*Not a match
  If not a match remove the flip class from the memory-card after 1000ms/1s in order for these memor-cards 
  to be flipped back and in the game agin after that time.*/
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
  
  // Add move 
  addMove();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();


// Event listener listening for click events (on a memory card) which activates the flipCard function.
cards.forEach(card => card.addEventListener('click', flipCard));

 
//Move counter
move = 0;
moveCounter.innerHtml = 0;
 
 function addMove() {
     move++;
     moveCounter.innerHTML = move;
 }
