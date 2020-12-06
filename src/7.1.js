// Section 7: Challenge

const pokemonApi = require('../api/pokemon.js');
// usando la libreria common tags
const  {stripIndent} = require('common-tags');

const show = (result) => {

    /* TODO:
        [ ] What is his name?
        [ ] What are his abilities?
        [ ] What are his types?
        [ ] What is his weight?
    */

	//console.log(result.name);
	//result.abilities.forEach(n => console.log(n.ability.name));
	// Usando desestructuración
	const ability = result.abilities.map( ({ability}) => ability.name);
//	console.log(ability);

	//result.types.forEach(n => console.log(n.type.name));
	// Usando desestructuración
	const types = result.types.map(({type}) => type.name);
//	console.log(types);
//	console.log(result.weight);


	// el stripindent es para borrar la identación, es una libreria de common-tags

	console.log(stripIndent`
	Name: ${result.name}
	Abilities: ${ability.length > 0 ? ability : ''}
	Types: ${types.length > 0 ? types : ''}
	Weight: ${result.weight}

		`);
};


(async () => {
    const id = await pokemonApi.getRandomId();
    const result = await pokemonApi.getInfo(id);
    show(result);
})().catch((error) => console.log(`Error: ${error}`));
