const INFO_PRODUCT =  PRODUCT_INFO_URL + localStorage.getItem("productID") + EXT_TYPE;
const containerInfo = document.getElementById("infoContainer");
const comments = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("productID") + EXT_TYPE;
const comentarios = document.getElementById("comentarios");
const stars = document.getElementById("stars");

console.log(INFO_PRODUCT);

document.addEventListener("DOMContentLoaded", function(p) {
    // function showProductInfo(currentCategoriesArray) {
    //     containerInfo.innerHTML = `
    //          <div onclick="productID(${currentCategoriesArray.id})>
    //          <p>${currentCategoriesArray.name} ${currentCategoriesArray.description} ${currentCategoriesArray.image} </p>
             
    //          </div>
    //          `
         
    // };
    
    getJSONData(INFO_PRODUCT).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProducts = resultObj.data
            showProductInfo(infoProducts)
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }   
    });

    getJSONData(comments).then(function(resultObj){
      if (resultObj.status === "ok"){
          infoComments = resultObj.data
          showCategoriesList(infoComments)
          //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
      }   
  });
});



function showCategoriesList(){

  let htmlContentToAppend = "";
  for(let i = 0; i < infoComments.length; i++){
      let comentario = infoComments[i];
          htmlContentToAppend += `
          <div onclick="comentarioID(${comentario.product})" class="list-group-item list-group-item-action cursor-active"  >
            <div class="col">
              <label id="score"><strong>${comentario.user}</strong> - ${comentario.dateTime} -  `
              for(let i = 0; i < 5; i++){
                if (i < comentario.score){
                  htmlContentToAppend += `<span class="fa fa-star checked"></span>`
                } else {
                  htmlContentToAppend += `<span class="fa fa-star"></span>`
                }
              };
              htmlContentToAppend+=
              ` </label> 
              <p>${comentario.description} </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="stretched-link" target="_blank"></a>
            </div>
          </div>
          `
      }
      
      comentarios.innerHTML = htmlContentToAppend;
  };

function showProductInfo(){

    let htmlContentToAppend = "";
    
        let info = infoProducts;

            htmlContentToAppend += `
            <div onclick="setProductID(${info.id})" class="row">
                    <h1 style="text-align:center">${info.name}</h1> 
                <hr>
                <div class="container">
                    <div class="col">
                        <label><strong>Precio</strong></label>
                            <p>${info.cost}</p>                  
                        <label><strong>Descripcion</strong></label>
                            <p>${info.description}</p>
                        <label><strong>Categoria</strong></label>
                            <p>${info.category}</p>
                        <label><strong>Cantidad de Vendidos</strong></label>
                            <p>${info.soldCount}</p>
                        <label><strong>Imagenes Ilustrativas</strong></label>
                    </div>
                </div>    

                <div id="carouselExampleIndicators" class="carousel slide w-50" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${info.images[0]}" class="d-block w-100" alt="0">
                    </div>
                    <div class="carousel-item">
                      <img src="${info.images[1]}" class="d-block w-100" alt="1">
                    </div>
                    <div class="carousel-item">
                      <img src="${info.images[2]}" class="d-block w-100" alt="2">
                    </div>
                    <div class="carousel-item">
                      <img src="${info.images[3]}" class="d-block w-100" alt="3">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                <br>
                <br>
                <br>                  
                </div>

                <label>Comentarios</label>

                </div>
              </div>
            `
        

        containerInfo.innerHTML = htmlContentToAppend;
    
}