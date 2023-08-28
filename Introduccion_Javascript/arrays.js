const cart = ['product1', 'product2', 'product3'];
console.log(cart);



const appContainer = document.querySelector('#app');

let html = '';

cart.forEach(product => {
    html += `<li>${product}</li>`;
});


appContainer.innerHTML = html;