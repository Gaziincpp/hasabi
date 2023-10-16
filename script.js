const submit = document.querySelector('#password');

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const passwordInput = document.querySelector("#ipassword").value;
    const errorMessage = document.querySelector("#error-message");
    const encodedPassword = btoa(passwordInput);

    if (encodedPassword === "aGFzYWJpNzc2") {
        if(localStorage.getItem("logged") === null) {
            localStorage.setItem("logged", true);
        };

        window.location.href = "home.html";

    } else if (encodedPassword === "aGFzYWJpNzc3") { 
        errorMessage.textContent = "Essa senha foi descartada. Nova senha no grupo."
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
});

function logout() {
    window.location.href = "login.html";
}