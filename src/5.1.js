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
    [ ] Show each property on console
    [ ] Add labels to each property on console
*/

console.log(`Nombre: ${character.name}`);
console.log(`Age: ${character.age}`);
console.log(`Address: ${character.home.address}`);
console.log(`Home city: ${character.home.city}`);
console.log(`Employed: ${character.isEmployed}`);

character.sons.forEach(n => console.log(`Hijo: ${n}`));

/*
console.log(character.sons[0]);
console.log(character.sons[1]);
console.log(character.sons[2]);
*/



console.log(character['name']);
console.log(character['age']);
console.log(character['home']['address']);
console.log(character['home']['city']);
console.log(character['isEmployed']);
console.log(character['sons'][0]);
console.log(character['sons'][1]);
console.log(character['sons'][2]);


