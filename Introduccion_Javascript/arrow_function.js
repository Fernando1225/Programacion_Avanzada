let traveling = function(destino) {
    return `Viajando a la ciudad de ${destino}`;
}


let travel = traveling('Paris');

console.log(travel);

let traveling2 = (destino, duracion) => `viajando a la ciudad de ${destino} por ${duracion}`;

let travel2 = traveling2('Londres', '9 dias');

console.log(travel2);


let traveling3 = (destino, duracion) => {
    return `viajando a la ciudad de ${destino} por ${duracion}`;
}

let travel3 = traveling3('Marruecos', '5 dias');


console.log(travel3);



// CALCULATE A TRIANGLE PERIMETER

let triangle_perimeter = (side1, side2, side3) => `Perimeter value: ${side1+side2+side3}`;

console.log(triangle_perimeter(25, 30, 50));


let triangle_perimeter2 = (side1, side2, side3) => {let value = side1+side2+side3; return `Perimeter value: ${value}`;}

console.log(triangle_perimeter2(75, 25, 50));