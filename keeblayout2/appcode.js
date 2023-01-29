const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
  for (let key of keys) {
    if (key.textContent === event.key) {
      key.classList.add('active');
      break;
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let key of keys) {
    if (key.textContent === event.key) {
      key.classList.remove('active');
      break;
    }
  }
});
