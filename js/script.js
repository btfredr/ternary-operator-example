const products = [
    {
        name: "Product A",
        delivered: true,
    },
    {
        name: "Product B",
        delivered: true,
    },
    {
        name: "Product C",
        delivered: false,
    },
];

const container = document.querySelector(".product-container");

for (let i = 0; i < products.length; i++) {

    //let colour = "red";

    //if (products[i].delivered) {
    //  colour = "green";
    //}

    // using a ternary operator instead of using an if statement to be more space efficient
    const colour = products[i].delivered ? "green" : "red";
    container.innerHTML += `<div class="product" style="background-color: ${colour}">${products[i].name}</div>`;
}



