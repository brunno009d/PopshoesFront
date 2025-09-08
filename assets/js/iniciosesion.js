// iniciosesion.js

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector(".username input");
    const passwordInput = document.querySelector(".contrasena input");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que el formulario se envíe

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Simulación de inicio de sesión
        if (username === "admin" && password === "1234") {
            alert("Inicio de sesión exitoso!");
            // Aquí podrías redirigir a otra página
            window.location.href = "../index.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
