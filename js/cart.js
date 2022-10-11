const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");

document.addEventListener("DOMContentLoaded", function(p) {

    getJSONData(CART_BUY).then(function(resultObj){
        if (resultObj.status === "ok"){
            articles = resultObj.data.articles
            showCart(articles)
            console.log(pepe)
        }   
    });
});

function showCart(){

    for(let item of articles){
        document.getElementById("cart1").innerHTML = `<div class="container"
        <img scr="${item.image}">
        <div>
        `
        document.getElementById("cart2").innerHTML = `
        <p>${item.name}</p>
        `
        document.getElementById("cart3").innerHTML = `
        <p>${item.currency} ${item.unitCost}</p>
        `
        document.getElementById("cart4").innerHTML = `
        <p>${item.count}</p>
        `
        }
    };
  