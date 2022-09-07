const INFO_PRODUCT =  PRODUCT_INFO_URL + localStorage.getItem("productID") + EXT_TYPE;
const containerInfo = document.getElementById("infoContainer");

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
});

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

                <div class="container">

                <div class="row">
               
                  <div class="col"> 
                    <img class="img-fluid border border-5" max-width="100%" height="auto" src="${info.images[0]}">
                  </div>
              
                  <div class="col">
                    <img class="img-fluid border border-5" max-width="100%" height="auto" src="${info.images[1]}">
                  </div>

                  <div class="col">
                    <img class="img-fluid border border-5" max-width="100%" height="auto" src="${info.images[2]}">
                  </div>

                  <div class="col">
                    <img class="img-fluid border border-5" max-width="100%" height="auto" src="${info.images[3]}">
                  </div>
               
                </div>
              </div>
            `
        

        containerInfo.innerHTML = htmlContentToAppend;
    
}