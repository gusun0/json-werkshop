// Section 6: CRUD

const users = require('../data/userArray.json');

console.log('Users:');
console.table(users);

const handle = 'sanchez_ata';
/*
const result = users.find(u => u.handle === handle);
*/

// Usando un for of
/*
let result = {};
for(const user of users){
  if(user.handle === handle){
	  result = user;
	  break;
  }
}
*/

// Usando el for tradicional
let result = {};
len = users.length;
for(let i = 0; i < len;i++){
	const user = users[i];
	if(user.handle === handle){
		result = user;
	}
}



/* TODO:
    [ ] Read Ata from `users` list and save on `result` variable
*/

console.log('Read:');
console.log(`Name:  ${result.name}`);
console.log(`Country: ${result.country}`);
