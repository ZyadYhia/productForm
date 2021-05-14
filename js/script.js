var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCatInput = document.getElementById("productCatInput");
var productDescInput = document.getElementById("productDescInput");
var searchInput = document.getElementById("searchInput");
var productList;
if (localStorage.getItem("ourProducts") == null) {
    productList = [];
} else {
    productList = JSON.parse(localStorage.getItem("ourProducts"));
    displayProduct(productList);

}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        cat: productCatInput.value,
        desc: productDescInput.value,
    }
    productList.push(product);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProduct(productList);
    clearForm()
}

function displayProduct(displayArray) {
    var cartona = "";
    for (var i = 0; i < displayArray.length; i++) {
        // cartona += "<tr><td>" + i + "</td><td>" + productList[i].name + "</td><td>" + productList[i].price + "</td><td>" + productList[i].cat + "</td><td>" + productList[i].desc + "</td></tr>";

        cartona += `
        <tr>
            <td>${i+1}</td>
            <td>${displayArray[i].name}</td>
            <td>${displayArray[i].price}</td>
            <td>${displayArray[i].cat}</td>
            <td>${displayArray[i].desc}</td>
            <td><button onClick="updateProduct(${i});" class="btn btn-warning">Update</button></td>
            <td><button onClick="deleteProduct(${i});" class="btn btn-danger">Delete</button></td>
        </tr>`;

        // cartona += "<tr><td>" + i + "</td><td>" + productList[i].name + "</td><td>" + productList[i].price + "</td><td>" + productList[i].cat + "</td><td>" + productList[i].desc + "</td></tr>";

    }
    document.getElementById('tableBody').innerHTML = cartona;
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCatInput.value = "";
    productDescInput.value = "";
}

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProduct(productList);

}

function searchProduct() {
    var term = searchInput.value;
    var wantedProducts = [];
    for (var i = 0; i < productList.length; i++) {
        // if (productList[i].name.toLowerCase() == term.toLowerCase()) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {
            wantedProducts.push(productList[i]);
        }
    }
    displayProduct(wantedProducts);
}


// function updateProduct(index) {
//     var product = {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         cat: productCatInput.value,
//         desc: productDescInput.value,
//     }
//     productList[index].push(product);
//     localStorage.setItem("ourProducts", JSON.stringify(productList));
//     displayProduct();
// }