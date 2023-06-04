const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function callback(item, index) {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  list.append(li);
})