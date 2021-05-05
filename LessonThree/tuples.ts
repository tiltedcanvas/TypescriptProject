// TUPLES

// array-like structure where each element represents some property of a record

// object representing a drink
// color - brown
// carbonated - true
// sugar - 40

// [ brown true 40 ]

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

// alternative represent as a tuple
// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown'

type Drink = [string, boolean, number];
// this doesn't create an array, instead it creaters an idea of a tuple inside of our application. it's a new type we can use to prevent having to write them out manually like  
// // add annotation to turn it into a tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Notes:
// we won't use tuples very often. you might inside of a CSV file. 
// why wont we use often? 

const carSpecs: [number, number] = [400, 3354];
// what do these numbers mean? what is the purpose? as engineers we can't really decipher what they are fore. 

// in object format because we're required to have
// a key, it is easier to decipher and understand 
// what data we are working with, quickly.
const carStates = {
	horsepower: 400,
	weight: 3354
};

