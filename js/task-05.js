const areaInput = document.querySelector("#name-input");
const areaOutput = document.querySelector("#name-output");

areaInput.addEventListener("input", (event) => {
    areaOutput.textContent = event.currentTarget.value
})