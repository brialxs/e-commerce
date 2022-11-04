const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const firstSurname = document.getElementById("firstSurname");
const secondSurname = document.getElementById("secondSurname");
const email = document.getElementById("email");
const telContact = document.getElementById("telContact");
const save_Changes = document.getElementById("save_Changes");


document.addEventListener("DOMContentLoaded", function(){
  
    save_Changes.addEventListener("click", function(){
        if (firstName.value) localStorage.setItem("firstName", firstName.value)
        if (secondName.value) localStorage.setItem("secondName", secondName.value)
        if (firstSurname.value) localStorage.setItem("firstSurname", firstSurname.value)
        if (secondSurname.value) localStorage.setItem("secondSurname", secondSurname.value)
        if (email.value) localStorage.setItem("email", email.value)
        if (telContact.value) localStorage.setItem("telContact", telContact.value)
    });

    document.getElementById("LOG_OUT").addEventListener("click", function() {
        window.location = "login.html"
        localStorage.removeItem("firstName");
        localStorage.removeItem("secondName");
        localStorage.removeItem("firstSurname");
        localStorage.removeItem("secondSurname");
        localStorage.removeItem("email");
        localStorage.removeItem("telContact");
      });
  });

  
  firstName.value = localStorage.getItem("firstName")
  secondName.value = localStorage.getItem("secondName")
  firstSurname.value = localStorage.getItem("firstSurname")
  secondSurname.value = localStorage.getItem("secondSurname")
  email.value = localStorage.getItem("email")
  telContact.value = localStorage.getItem("telContact")

  function validateForm() {

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')

        false})
      })
      
  }
  validateForm();