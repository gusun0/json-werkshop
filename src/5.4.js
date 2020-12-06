const user = {};
let handle = 'equiman';
user[handle] = {};
user[handle].type = 'Admin';
user[handle].message = {};
user[handle].message.time = 30;
user.equiman.message.type = 'sec';

handle = 'equimancho';
const message = {type: 'dec', time: 60}
user[handle] = {type: 'User', message: message};
// Usando ES6
//user[handle] = {type: 'User', message};

console.log(user);
