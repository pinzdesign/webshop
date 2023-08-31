const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if(category) {
    fetchLink = "https://kea-alt-del.dk/t7/api/products?limit=120&category=" + category;
    //console.log(fetchLink);
}
else {
    fetchLink = "https://kea-alt-del.dk/t7/api/products?limit=120";
}

fetch(fetchLink).then(res=>res.json()).then(data=>showProducts(data));

function showProducts(products) {
    products.forEach(showProduct);
}

function showProduct(product) {
    //console.log(product);
    // making a clone
    const template = document.querySelector("#item_template").content;
    const copy = template.cloneNode(true);

    // setting data
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".category").textContent = "Kategori:" + product.category;
    copy.querySelector(".subcategory").textContent = "Underkategori:" + product.subcategory;
    copy.querySelector(".season").textContent = "Sæson:" + product.season;
    copy.querySelector(".price").textContent = "Pris: " + product.price + " DKK";
    copy.querySelector(".readmore a").setAttribute("href", "produkt.html?id=" + product.id);

    // set image
    const imgPath = "https://kea-alt-del.dk/t7/images/webp/1000/" + product.id + ".webp";
    copy.querySelector(".item_img img").setAttribute("src", imgPath);

    if(product.discount) {
        // add a class to item (unused)
        copy.querySelector(".item").classList.add("discount");

        // add a new label node
        const node = document.createElement("span");
        const node_txt = document.createTextNode("-" + product.discount + "%");
        node.appendChild(node_txt);
        node.classList.add("discount_label");
        copy.querySelector(".item").appendChild(node);
    }
    if(product.soldout == true) {
        // add a new class to item (changes img opacity)
        copy.querySelector(".item").classList.add("soldout");

        // add a new label node
        const node = document.createElement("span");
        const node_txt = document.createTextNode("Udsolgt");
        node.appendChild(node_txt);
        node.classList.add("soldout_label");
        copy.querySelector(".item").appendChild(node);
    }
    
    //appending clone
    document.querySelector("#item_container").appendChild(copy);
}