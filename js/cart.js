const CART_BUY = CART_INFO_URL + "25801" + EXT_TYPE;
const bodyTable = document.getElementById("bodyTable");

document.addEventListener("DOMContentLoaded", function(p) {
    
    fetch(CART_BUY)           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));
    });



function showCart (){

    // let { id, name, count, unitCost, currency, image } = data;

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

showCart();
