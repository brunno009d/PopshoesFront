
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector(".username input");
    const passwordInput = document.querySelector(".contrasena input");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

      
        if (username === "admin" && password === "1234") {
            alert("Inicio de sesión exitoso!");
            
            window.location.href = "../index.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
