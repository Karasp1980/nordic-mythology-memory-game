//EventListener waiting for the DOM content to be loaded to star executing the js 
document.addEventListener("DOMContentLoaded", function(event) { 
  
  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false; //When starting the game no card has been flipped yet.
  let firstCard, secondCard; // First clicked card and second clicked card in order to check for match
  let lockBoard = false;  
  const timeCounter = document.querySelector(".timer");
  const moveCounter = document.querySelector(".moves"); 
  let gameOn = false; 
  let match=0; //Used for the match-counter
  let totalMoves=0;
  let totalTime="";

  let winMsg = document.getElementById("winMessageWindow");
  let howto=document.getElementById("howToPlay");
  let howtoBtn=document.getElementById("howto-btn");
  let resetBtn=document.getElementById("reset-btn");
  let closeHowto=document.getElementById("howto-close");
  let closeWin=document.getElementById("win-close");
  

  //Events
   cards.forEach(card => card.addEventListener('click', flipCard));   //Event listener listening for click events (on a memory card) which activates the flipCard function.

   resetBtn.addEventListener("click", reset); //Event listener listening for clicks on the reset button.

   howtoBtn.addEventListener("click", howTo); //Event listener listening for clicks on the "How to play"-button

  

  // flipCard function with help from https://github.com/code-sketch/memory-game
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

    //Second click
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
    match++;  // When it´s a match, add to the match counter
    
    //When all mathes are found (8 pairs) the the timer stops and win message shows
    if(match===8){
      totalMoves= move;
      clearInterval(time);
      winMessage();
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


// Reset board
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

// Card shuffle
 function shuffle() {
  cards.forEach(cards => {
      let randomPosition = Math.floor(Math.random() * 16);
      cards.style.order = randomPosition;
  });
}

  //Move counter
  let move = 0;
  moveCounter.innerHtml = 0;
  
  function addMove() {
      move++;
      moveCounter.innerHTML = move;
  }

  //timer
  let time;
  let minutes = 0;
  let seconds = 0;
  let timeStart = false;
  timeCounter.innerHTML = "Time:  " + minutes + " : " + seconds;
  
  function timer() {
      time = setInterval(function() {
          seconds++;
          if (seconds === 60) {
              minutes++;
              seconds = 0;
          }
          timeCounter.innerHTML = "Time:  " + minutes + " : " + seconds;
      }, 1000);
  }

    function stopTime() {
    clearInterval(time);
    }



  // Win message pop up 
  function winMessage() {
    winMsg.style.display = "block";
    totalTime = timeCounter.innerHTML;
    // showing moves and time on modal
    document.getElementById("totalMoves").innerHTML = totalMoves;
    document.getElementById("totalTime").innerHTML = totalTime;
    closeWin.addEventListener("click", close); 
    reset();
  }

   // How to play message pop up 
   function howTo() {
    howto.style.display = "block";
    closeHowto.addEventListener("click", close); 
  }

  //close "How to play" or "Win message" popup window
  function close(){
    howto.style.display = "none";
    winMsg.style.display="none";
  }


  // reset
  function reset(){
    hasFlippedCard = false;
    [firstCard, secondCard] = [null, null];
    stopTime();
    gameOn = false;
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "Timer 0:0";
    move = 0;
    moveCounter.innerHTML = 0;
    match = 0;
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));

  }

  reset();

});










