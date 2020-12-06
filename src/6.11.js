const users = require('../data/userArray.json');

const userObject = {};

users.forEach(user => {
 const {
	 handle,
	 ...properties
 } = user;
	userObject[handle] = properties;
});

console.log(userObject);


