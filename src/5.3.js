// Section 5: Properties

const character = {
    name: "Homer J Simpson",
    age: 39,
    home: {
        address: "Avenida Siempreviva 742",
        city: "Springfield"
    },
    isEmployed: true,
    sons: ["Bart", "Lisa", "Maggie"]
}

/* TODO:
    [ ] Create variables for `age`, `city` and `sons` values with properties notation
    [ ] Create same variables from `character` object` using destructuring
*/
/*
age = character.age;
city = character.home.city;
sons = character.sons;

console.log(age);
console.log(city);
console.log(sons);
*/

console.log('Desestructuracion');
const {name, age, home, isEmployed,sons} = character;
const { address, city } = home;
console.log(name);
console.log(age);
console.log(address);
console.log(city);
console.log(isEmployed);
console.log(sons[0]);



