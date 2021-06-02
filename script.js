'use strict';

let secretNumber = Math.trunc(Math.random()*20 ) + 1;
document.querySelector('.number').textContent;
let currentScore = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');


  
  if(!guess) {
    message.textContent = '⚠️ no number !';
  }
  else if(guess === secretNumber) {
    message.textContent = "Congratulations 🎉, you've guessed the number."
    document.body.style.backgroundColor = "green";
    document.querySelector('.number').style.width = "300px"
    document.querySelector('.guess-header').textContent = "C o n g r a t s ! 🥳"
    document.querySelector('.number').textContent = secretNumber;
    
    if(currentScore > highscore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  

  else if(guess > secretNumber) {
    if(currentScore > 1) {
      message.textContent = 'Too High ! 📈';
      currentScore--;
      document.querySelector('.score').textContent = currentScore
    } 
    else {
      message.textContent = '💥 Game Over...'
    }
  } 
  else if(guess < secretNumber) {
    if(currentScore > 1) {
      message.textContent = 'Too Low ! 📉';
      currentScore--;
      document.querySelector('.score').textContent = currentScore
    }
    else {
      message.textContent = '💥 Game Over...'
    }
  }
});

document.querySelector('.again').addEventListener('click',() => {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random()*20 ) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = currentScore;
  Number(document.querySelector('.guess').value = '');
  document.body.style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "150px";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess-header').textContent = "Guess My Number!";
})