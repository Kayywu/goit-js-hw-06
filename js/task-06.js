const textInput = document.querySelector("#validation-input");
const maxTextLength = textInput.CDATA_SECTION_NODE.length;

textInput.addEventListener("blur", (event)=> {
    if (event.currentTarget.value.length < maxTextLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid")
        }
})