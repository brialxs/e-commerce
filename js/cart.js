const cartBuy = CART_INFO_URL + 25801 + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");

document.addEventListener("DOMContentLoaded", function(p) {
    
    getJSONData(cartBuy).then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProducts = resultObj.data
            showCart(cartBuy)
        }   
    });
});

function showCart (){

    let addCart = "";
    for (let cart of cartBuy) {
    addCart += `
    <tbody">
        <tr>
        <th scope="row">1</th>
        <td>${cart.name}</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
  
     </tbody>
    `
    }

    bodyTable.innerHTML = addCart;
    console.log(cartBuy)

};