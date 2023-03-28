const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

button.addEventListener('click', changeColor);