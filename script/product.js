const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id).then(res=>res.json()).then(data=>showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector("h4").textContent = product.productdisplayname;
    document.querySelector(".description").innerHTML = product.description;
    document.querySelector(".price").textContent = "Pris: " + product.price + "DKK";
    document.querySelector(".brand").textContent = "Brand: " + product.brandname;
    document.querySelector(".category").textContent = product.category;
    document.querySelector(".subcategory").textContent = product.subcategory;
    // image
    const imgPath = "https://kea-alt-del.dk/t7/images/webp/1000/" + product.id + ".webp";
    document.querySelector(".product_img img").setAttribute("src", imgPath);
}