document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    redirectToLogin();
    navBar();

    document.getElementById("LOG_OUT").addEventListener("click", function() {
        window.location = "login.html"
        localStorage.removeItem("user");
      });
      
});

function redirectToLogin() {
    if (localStorage.getItem("user") == null) {
        window.location = "login.html";
    }
};

function navBar() {
    let navUser = "";
    let Usuario = document.getElementById('Usuario');
    let usuarioStorage = localStorage.getItem("user");

    navUser += `
            <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ${usuarioStorage}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
            <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
            <li><a id="LOG_OUT" class="dropdown-item" href="">Cerrar Sesión</a></li>
        </ul>
        </div>
    `

    Usuario.innerHTML = navUser;
}