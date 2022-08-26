const inputEmail = document.getElementById("email");
const nameTag = document.getElementById('nombre');
const surname = document.getElementById('apellido');
const email = document.getElementById('email'); 
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const terTag = document.getElementById('terminos');
const button = document.getElementById('loginButton');


button.addEventListener("click", () => {

    const regularPhrase = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let comeIn = false;
    let alertE = "";
    let alertC = "";
    if(!regularPhrase.test(inputEmail.value)){
        alertE += 'No se ingreso email correctamente'
        comeIn = true
    };

    if(pass1.value.length <= 5){
        alertC += 'No se ingreso contraseña correctamente' 
        comeIn = true
    };

    if(comeIn){
        document.getElementById("paragraphh").innerHTML = alertE;
        document.getElementById("paragraphh2").innerHTML = alertC;
    } else {
        window.location = "main.html";
    }
});



button.addEventListener("click", () =>{
    if (inputEmail.value) localStorage.setItem("user", inputEmail.value);
})