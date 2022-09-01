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
});

const Usuario = document.getElementById('Usuario');

Usuario.innerHTML = (localStorage.getItem("user"));

function redirectToLogin() {
    if (localStorage.getItem("user") == null) {
        window.location = "login.html";
    }
};