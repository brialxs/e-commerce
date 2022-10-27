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
        <input oninput="calcSubTotal()" min="0" id="cantidad" type="number" value="${item.count}">
        `

        cart5.innerHTML = `
        ${item.unitCost}
        `

        sub_Total2.innerHTML += `
        <p><strong>${item.currency}</strong> ` + ` ${item.unitCost}</p>
        `
        }
    };

   function calcSubTotal() {
    const quantity = document.getElementById("cantidad");
    const cost = articles[0].unitCost;

    cart5.innerHTML = (quantity.value * cost)
    sub_Total2.innerHTML = (quantity.value * cost)

    return quantity.value * cost
   };

   premium.addEventListener("click", function(){
    document.getElementById("sendCost").innerHTML = (calcSubTotal() * 0.15);
   });

   express.addEventListener("click", function(){
    document.getElementById("sendCost").innerHTML = (calcSubTotal() * 0.07);
   });

   standard.addEventListener("click", function(){
    document.getElementById("sendCost").innerHTML = (calcSubTotal() * 0.05);
   });