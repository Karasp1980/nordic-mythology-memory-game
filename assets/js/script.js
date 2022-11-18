const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; //When starting the game no card has been flipped yet.
let firstCard, secondCard; // First clicked card and second clicked card in order to check for match
let lockBoard = false;  
const timeCounter = document.querySelector(".timer");
const moveCounter = document.querySelector(".moves"); 
let gameOn = false;
let match=0;



/* flipCard function with help from https://github.com/code-sketch/memory-game*/
function flipCard() {
  if (!gameOn) {
    gameOn = true;
    timer();
}
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //If hasFlippedCard is false (first time the card is clicked) set the clicked card to firstCard
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

// Check if the two cards clicked match (firstCard===secondCard)
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

// When it´s a match, remove eventlisteners of the cards in order to prevent these cards to be clicked again
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
  match++;
  
  if(match>7){
    clearInterval(time);
  }

  
}

/*Not a match
  If not a match remove the flip class from the memory-card after 1000ms(1s) in order for these cards 
  to be flipped back and in the game agin after that time.*/
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
  
  // Add a move to the move-counter in the addMove function
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
let move = 0;
moveCounter.innerHtml = 0;
 
 function addMove() {
     move++;
     moveCounter.innerHTML = move;
 }

 //timer
 let time;
 let minutes = 00;
 let seconds = 00;
 let timeStart = false;
 timeCounter.innerHTML = "Time " + minutes + " : " + seconds;
 
 function timer() {
     time = setInterval(function() {
         seconds++;
         if (seconds === 60) {
             minutes++;
             seconds = 0;
         }
         timeCounter.innerHTML = "Time " + minutes + " : " + seconds;
     }, 1000);
 }


  function stopTime() {
  clearInterval(time);
  }



 






