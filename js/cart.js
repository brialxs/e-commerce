const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");

document.addEventListener("DOMContentLoaded", function(p) {
    
    getJSONData(CART_BUY).then(function(resultObj){
        if (resultObj.status === "ok"){
            cart = resultObj.data
            showCart()
        }   
    });
});



function showCart (){

    let { id, name, count, unitCost, currency, image } = CART_BUY;

    let addCart = "";
    for (let cart of CART_BUY) {
        
    addCart += `
    <tbody>
        <tr>
            <th scope="row">${cart.id}</th>
            <td>${cart.name}</td>
            <td>0</td>
            <td>@mdo</td>
         </tr>
     </tbody>
    `
    }

    bodyTable.innerHTML = addCart;
    console.log(CART_BUY)

};

