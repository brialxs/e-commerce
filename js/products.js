const cars = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const container = document.getElementById("products");


function showData(dataArray) {
  for (const item of dataArray) {    
    container.innerHTML +=`
    <div onclick="setCatID(${item.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${item.name}</h4>
                    <small class="text-muted">${item.soldCount} artículos</small>
                </div>
                <p class="mb-1">${item.description}</p>
            </div>
        </div>
    </div>
    `
  }
}

fetch(cars)
.then (function(response) {
  return response.json();
})
.then (function(data) {
  console.log(data.products);
  showData(data.products);
});