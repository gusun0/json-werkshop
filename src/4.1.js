// Section 4: Conversions

const dog = {
    breed: "Akita Inu",
    name: "Hachiko"
};

/* TODO:
    [ ] Convert `dog` object to string
    [ ] Save on `result` variable
*/

console.log("Object:");
console.log(dog);

result = JSON.stringify(dog,['name']);
console.log("String:");
console.log(result);
