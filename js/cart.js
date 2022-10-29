const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2"); 
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("subtotal");
const sub_Total2 = document.getElementById("subTotal2");
const premium = document.getElementById("goldradio");
const express = document.getElementById("premiumradio");
const standard = document.getElementById("standardradio");
const costSend = document.getElementById("sendCost");
const total = document.getElementById("total");
const saveModal = document.getElementById("saveChanges");
const creditCard = document.getElementById("creditCard");
const bank = document.getElementById("bank");
const target = document.getElementById("target");
const target2 = document.getElementById("target2");
let articles = [];


document.addEventListener("DOMContentLoaded", function(p) {

    getJSONData(CART_BUY).then(function(resultObj){
        if (resultObj.status === "ok"){
            articles = resultObj.data.articles
            showCart(articles)
            console.log(articles)
        }   
    });
    calcSubTotal();
    calcTotal();
});



function showCart(){

    for(let item of articles){


        cart1.innerHTML = `<div class="container">
        <img class="img-responsive" width="90" height="60" src="${item.image}">
        <div>
        `
        cart2.innerHTML = `
        <p>${item.name}</p>
        `
        cart3.innerHTML = `
        <p>${item.currency} <span id="cost">${item.unitCost}</span></p>
        `
        cart4.innerHTML = `
        <input oninput="calcSubTotal()" min="1" id="cantidad" type="number" value="${item.count}">
        `

        cart5.innerHTML = `
        ${item.unitCost}
        `

        sub_Total2.innerHTML = `
        <div class="d-flex flex-row-reverse bd-highlight"><p>${item.unitCost}</p> ` + ` <p>${item.currency}</p></div>
        `
        }
    };

   function calcSubTotal() {
    const quantity = document.getElementById("cantidad");
    const cost = articles[0].unitCost;

    cart5.innerHTML = parseInt(quantity.value * cost)
    sub_Total2.innerHTML = parseInt(quantity.value * cost)

    return quantity.value * cost
   };

   premium.addEventListener("click", function(){
    costSend.innerHTML = parseInt(calcSubTotal() * 0.15);
    total.innerHTML = calcSubTotal() + parseInt(costSend.textContent)
    calcTotal()
    return parseInt(calcSubTotal() * 0.15)
   });

   express.addEventListener("click", function(){
    costSend.innerHTML = parseInt(calcSubTotal() * 0.07);
    total.innerHTML = calcSubTotal() + parseInt(costSend.textContent)
    calcTotal()
    return parseInt(calcSubTotal() * 0.07)
   });

   standard.addEventListener("click", function(){
    costSend.innerHTML = parseInt(calcSubTotal() * 0.05);
    total.innerHTML = calcSubTotal() + parseInt(costSend.textContent)
    calcTotal()
    return parseInt(calcSubTotal() * 0.05)
   });

   function calcTotal() {
        cantidad.addEventListener("click", function(){
            total.innerHTML = calcSubTotal() + parseInt(costSend.textContent)
            return calcSubTotal() + parseInt(costSend.textContent)
        })
   };

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
          if (!document.getElementById("flexRadioDefault1").checked || !document.getElementById("flexRadioDefault2").checked){
          target2.innerHTML = "Debe seleccionar una forma de pago";
            }

            if (document.getElementById("flexRadioDefault1").checked || document.getElementById("flexRadioDefault2").checked){
                target2.innerHTML = "";
            }
        
        false})
      })
      
  }
  validateForm();

  function selectFormToPay() {
    saveModal.addEventListener("click", function(){

        if(document.getElementById("flexRadioDefault1").checked){
            target.innerHTML = creditCard.textContent
        }

        if(document.getElementById("flexRadioDefault2").checked){
            target.innerHTML = bank.textContent
        }
    })
  };

  selectFormToPay();

  document.getElementById("endButton").addEventListener("click", function(){
    if(validateForm === ok){
        document.getElementById("success").innerHTML = `
        <div class="valid-feedback alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
      }
  });


  