// Section 4: Conversions

const getAge = () => undefined;

const filtro = (key,value) => {
 if(!key || key === 'string' && value === 'false'){
	 return value;
 }
	return undefined;
}


const badBoy = {
    isValid: false,
    age: getAge(),
    current: new Date(),
};

/* TODO:
    [ ] Convert `badBoy` object to string and save on `result` variable
    [ ] Remove `toJson()` from `Date()` and return `undefined` on `getAge()`
    [ ] Filter by `current` properties, and format text with 2 spaces
*/

result = JSON.stringify(badBoy,['current'],2);
console.log(result);
