// Section 4: Conversions


const reviver = (key, value) => {
	if(typeof value !== 'string'){
		return value;
	}

	const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
	return isoDate.test(value) ? new Date(value) : value;
};

const json = '{"isValid": false, "age": 18, "current": "2020-04-01T03:15:32.130Z"}';

/* TODO:
    [ ] Convert string `json` to `badBoy` object ¿it's posible?
    [ ] Change `age` value with 18 number and `current` with "2020-04-01T03:15:32.130Z"
    [ ] Try convert using the reviver option, ensuring `current` was parsed to ISO-8601 date format
*/

badBoy = JSON.parse(json,reviver);
console.log(badBoy);
console.log(typeof badBoy.current);
