const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const fakeNoButton = document.getElementById('fakeNoButton');

let attempts = 0;

// Move the "No" button randomly when clicked
noButton.addEventListener('click', () => {
  attempts++;
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // Shrink the button
  const currentWidth = parseFloat(window.getComputedStyle(noButton).width);
  const currentHeight = parseFloat(window.getComputedStyle(noButton).height);
  noButton.style.width = `${currentWidth * 0.9}px`;
  noButton.style.height = `${currentHeight * 0.9}px`;

  // Funny messages after certain attempts
  if (attempts === 3) {
    alert("You're persistent, huh? 😏");
  } else if (attempts === 5) {
    alert("Just click 'Yes' already! 😜");
  } else if (attempts === 7) {
    noButton.style.display = 'none';
    alert("Fine, I'll take that as a 'Yes'! 😘");
  }
});

// Fake "No" button
fakeNoButton.addEventListener('click', () => {
  alert("Haha, that's the fake one! Try again! 😂");
});

// Confetti and message for "Yes" button
yesButton.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  alert("Yay! I knew it! 😊❤️");
});