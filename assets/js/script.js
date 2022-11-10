const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');
}

// Event listener listening for click events (on a memory card) which activates the flipCard function.
cards.forEach(card => card.addEventListener('click', flipCard));
