const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
    const li = document.createElement("li");
    li.className = 'item';
    li.textContent = ingredient;
    return li;
  });

  ul.append(...liElements);

