const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2"); 
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("cart5");


document.addEventListener("DOMContentLoaded", function(p) {

    getJSONData(CART_BUY).then(function(resultObj){
        if (resultObj.status === "ok"){
            articles = resultObj.data.articles
            showCart(articles)
            console.log(pepe)
        }   
    });
    subTotal();
});


function showCart(){

    for(let item of articles){


        cart1.innerHTML = `<div class="container">
        <img class="img-responsive" src="${item.image}">
        <div>
        `
        cart2.innerHTML = `
        <p>${item.name}</p>
        `
        cart3.innerHTML = `
        <p>${item.currency} ${item.unitCost}</p>
        `
        cart4.innerHTML = `
        <input id="cantidad" oninput="${item.count}" type="number" value="${item.count}">
        `
        }
    };

    function subTotal() {
        quantity = parseInt(document.getElementById("cantidad").value);

        return quantity * item.unitCost
    };