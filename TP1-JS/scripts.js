// Point 1
const age = 21;
// console.log("I am " + age + " years old.");
console.log(`I am ${age} years old.`);



// Point 2
const num1 = 20;
const num2 = 8;

console.log(`Addition: ${num1+num2}`);
console.log(`Subtraction: ${num1-num2}`);
console.log(`Multiplication: ${num1*num2}`);
console.log(`Division: ${num1/num2}`);


// Point 3
const retirementAge = 65;

if (retirementAge >= 65) {
    console.log("You can retire.");
} else {
    console.log("You cannot retire.");
}

// const canRetire = retirementAge >= 65? "You can retire." : "You cannot retire.";
// console.log(canRetire);


// Point 4
function Person(age, gender) {
    this.age = age;
    this.gender = gender;
}

person1 = new Person(65, 'M');
person2 = new Person(59, 'F');
const retirementPerson = [person1, person2];

retirementPerson.forEach(function(person) {
    if ((person.age >= 65 && person.gender === 'M') || (person.age >= 60 && person.gender === 'F')) {
        console.log("You can retire.");
    } else {
        console.log("You cannot retire.");
    }
})


// Point 5
