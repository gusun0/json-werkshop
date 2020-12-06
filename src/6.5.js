// Section 6: CRUD
const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');


/* TODO:
    [ ] Import `userObject.json`
    [ ] Import `saveFile` API
    [ ] Add property `level` to whole users
    [ ] Update information on `userObject.json` file
*/

for(const key in users){
 users[key].level = 'Pro';
}
console.table(users);
saveFile.toJSON(users,'userObject');


