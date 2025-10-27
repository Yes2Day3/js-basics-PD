let products = [
    {
        name: "Monitor",
        category: "electronics",
        price: 40,
        stock: 6
    },
    {
        name: "Mouse",
        category: "electronics",
        price: 13,
        stock: 9
    },
    {
        name: "T-shirt",
        category: "clothes",
        price: 5,
        stock: 22
    },
]

let sum = 0;
for(let i = 0; i < products.length; i++){
    let product = products[i];
    if(product.category == "electronics"){
        console.log(product)
    }
    sum = sum + product.price * product.stock
}

console.log("Kopējā summa: " + sum)