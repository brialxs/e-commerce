const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");

document.addEventListener("DOMContentLoaded", function(p) {

    getJSONData(CART_BUY).then(function(resultObj){
        if (resultObj.status === "ok"){
            articles = resultObj.data.articles
            showCategoriesList(articles)
            console.log(articles)
        }   
    });
});

function showCategoriesList(){

    for(let articles of CART_BUY){
        document.getElementById("cart1").innerHTML = `<div class="container"
        <p>${articles.id}</p>
        <div>
        `
        document.getElementById("cart2").innerHTML = `
        <p>${articles.name}</p>
        `
        }
    };
  