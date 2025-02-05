// Set the reveal date and time (YYYY, MM-1, DD, HH, MM, SS)
const revealDate = new Date(2025, 1, 20, 10, 0, 0); // February 20, 2025, 10:00 AM

function updateCountdown() {
  const now = new Date();
  const timeLeft = revealDate - now;

  if (timeLeft <= 0) {
    clearInterval(interval);
    document.getElementById('timer').innerHTML = "It's Time!";
    revealName();
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

function revealName() {
  const nameSection = document.querySelector('.name-reveal');
  const nameElement = document.getElementById('revealedName');

  nameSection.style.display = 'block';
  nameElement.textContent = "Baby [Name]"; // Replace with the actual name
  nameElement.classList.remove('hidden');
  nameElement.classList.add('revealed');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Music toggle functionality
const backgroundMusic = document.getElementById('backgroundMusic');

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}