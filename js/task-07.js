const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    textElement.style.fontSize = `${fontSizeControl.value}px`
};