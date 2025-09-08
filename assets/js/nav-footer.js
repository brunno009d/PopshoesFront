// layout.js
window.onload = function () {
    document.getElementById("navigator").innerHTML = navBar();
    document.getElementById("footer").innerHTML = footer();
};

// Menú dinámico
function navBar() {
    return `
    <header>
        <nav class="navbar">
            <!-- Logo -->
            <div class="navbar-logo">
                <img src="../assets/img/logo.png" alt="Logo">
            </div>

            <!-- Menú -->
            <ul class="navbar-menu">
                <li class="menu-item"><a href="../index.html">Home</a></li>
                <li class="menu-item"><a href="catalogo.html">Marcas</a></li>
                <li class="menu-item"><a href="catalogo.html">Hombre</a></li>
                <li class="menu-item"><a href="catalogo.html">Mujer</a></li>
                <li class="menu-item"><a href="catalogo.html">Estilos</a></li>
                <li class="menu-item"><a href="catalogo.html">Famosos</a></li>
            </ul>

            <!-- Acciones -->
            <div class="navbar-actions">
                <div class="navbar-cart">
                    <a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
                <div class="navbar-login">
                    <a href="inicioSesion.html">Inicio Sesión</a>
                </div>
            </div>
        </nav>
    </header>
    `;
}

// Footer dinámico
function footer() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-row">
                <!-- Logo -->
                <div class="footer-links">
                    <a href="#"><img src="assets/img/logo.png" alt="popshoes" class="footer-logo"></a>
                </div>

                <!-- Contacto -->
                <div class="footer-links">
                    <h4>CONTACTO</h4>
                    <ul>
                        <li><a href="#"><i class="fa-solid fa-phone"></i> +569 45454545</a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i> popshoes@gmail.com</a></li>
                    </ul>
                </div>

                <!-- Métodos de pago -->
                <div class="footer-links">
                    <h4>MÉTODOS DE PAGO</h4>
                    <ul>
                        <li><a href="#">Teléfono</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>

                <!-- Redes sociales -->
                <div class="footer-links">
                    <h4>REDES SOCIALES</h4>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}
