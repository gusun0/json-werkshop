// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

/* TODO:
    [ ] Import `userArray.json`
    [ ] Import `saveFile` API
    [ ] Add property `level` to whole users
    [ ] Update information on `userArray.json` file
*/

/*
for(const [index,value] of users.entries()){
 value.level = 'Pro';
 users[index] = value;
}
*/

// Modo 2
/*
for(const element of users.entries()){
	[index, value] = element;
 	value.level2 = 'Pre';	
	console.log(element);
}
*/

console.table(users);
//saveFile.toJSON(users,'userArray');



