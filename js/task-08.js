const form = document.querySelector("#.login-form");

const clickSubmit = (event) => {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        const alertWarning = "Uzupełnij wszystkie pola formularza";
        return alert(alertWarning);
    } else {
        const newData = {
            email: email.value,
            password: password.value,
        };
        console.log(newData);
        event.currentTarget.reset()
    }
};

form.addEventListener("submit", clickSubmit)