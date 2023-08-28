const languages = ['Javascript', 'Python', 'Ruby', 'Php'];
const frameworks = ['Reactive', 'Angular', 'Django', 'Ruby on Rails'];


// let combinations = languages.concat(frameworks);

let combinations = [...languages, ...frameworks];

console.log(combinations);


let [last] = [...languages.reverse()];

console.log(last);


let [first] = [...languages.reverse()];

console.log(first);
