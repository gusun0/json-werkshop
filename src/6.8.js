// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(users);

const handle = 'selene_nr';

// Usando map

const result = users.map(user => {
  if(user.handle === handle){
	  user.country = 'De';
  }
  return user;

});


/*
result = users.find(user => user.handle === handle);
result.country = 'De';
*/

/* TODO:
    [ ] Update Lara `country` to `DE` on `users` list
    [ ] Update information on `userArray.json` file
*/

console.log('Update:');
console.table(result);
//saveFile.toJSON(users,'userArray');
