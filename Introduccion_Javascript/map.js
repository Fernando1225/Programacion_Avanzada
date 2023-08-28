const cart = ['product1', 'product2', 'product3'];
console.log(cart);



cart.map(product => {
    return `The product is ${product}`;
});

// In this case, the map dont modify the array content
