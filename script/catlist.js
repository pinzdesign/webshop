fetch("https://kea-alt-del.dk/t7/api/categories").then(res=>res.json()).then(data=>showCategories(data));

function showCategories(categories) {
    categories.forEach(showCategory);
}

function showCategory(category) {
    console.log(category);
    // copy and clone template
    const template = document.querySelector("#cat_template").content;
    const copy = template.cloneNode(true);

    // set data
    copy.querySelector("h3 a").setAttribute("href", "produktliste.html?category=" + category.category);
    copy.querySelector("h3 a").textContent = category.category;

    // append clone
    document.querySelector("#cat_item_container").appendChild(copy);
}