const products = [
    {
        name: "Product A",
        delivered: false,
    },
    {
        name: "Product B",
        delivered: false,
    },
    {
        name: "Product C",
        delivered: true,
    },
];

const container = document.querySelector(".product-container");

for (let i = 0; i < products.length; i++) {
    // let colour = "red";

    // if (products[i].delivered) {
    //     colour = "green;";
    // }

    const colour = products[i].delivered ? "green" : "red";

    container.innerHTML += `<div class="product" style="background-color: ${colour}">${products[i].name}</div>`;
}
