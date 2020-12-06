// Section 6: CRUD

const users = require('../data/userArray.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const handle = 'bochap_';

const index = users.findIndex(u => u.handle === handle);
//console.log(index);
if(index > -1) {
 users.splice(index,1);
}






/* TODO:
    [ ] Delete Bocha from `users` list
    [ ] Update information on `userArray.json` file
*/

console.log('Delete:');
console.table(users);
//saveFile.toJSON(users,'userArray');
