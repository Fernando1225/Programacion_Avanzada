function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello('Fernando');


// Fucntion expressions

const Customer = function Customer(customer_name, skill) {
    console.log(`Customer name: ${customer_name} and skill: ${skill}`);
}

Customer('Fernando Perez', 'Web Developer');