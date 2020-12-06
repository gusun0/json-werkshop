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
    [ ] Show each son in a different line
*/


//character.sons.forEach(n => console.log(n));
/*
character.sons.forEach((son,index) => {
  console.log(`Hijo ${index +1}: ${son}`);
})
*/
/*

console.log(character['sons'][0]);

// Usando desestructuración
const [s1,s2,s3] = character.sons;
console.log(s1);
*/

console.log(character['sons'][0]);
console.log(character['sons'][1]);
console.log(character['sons'][2]);


