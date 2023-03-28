  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const valueSpan = document.querySelector('#value');
  
  let counterValue = 0;
  
  decrementButton.addEventListener('click', () => {
    counterValue--;
    valueSpan.textContent = counterValue;
  });
  
  incrementButton.addEventListener('click', () => {
    counterValue++;
    valueSpan.textContent = counterValue;
  });