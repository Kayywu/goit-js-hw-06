const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const incrementButton = () => {
    counter Value += 1;
    value.textContent = counterValue;
}

const decrementButton = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

buttonMinus.addEventListener("click", decrementButton);
buttonPlus.addEventListener("click", incrementButton);