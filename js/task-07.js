const fontSizeControl = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

spanSize.style.fontSize =  `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", (event) => {
    const currentValue = event.currentTarget.value;
    spanSize.style.fontSize =   `${currentValue}px`;
})