// interfaces
// creates a new type, descriping the property 
// names and value types of an object

// define an object that represents a car
// then write function that operates on tha tobject and then introduce interfaces

// const oldCivic = {
// 	name: 'civic',
// 	year: 2000,
// 	broken: true
// };

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
// 	console.log(`Name: ${vehicle.name}`);
// 	console.log(`Year: ${vehicle.year}`);
// 	console.log(`Broken? ${vehicle.broken}`);
// }

// printVehicle(oldCivic);

// the above object and function is all very bulky. 
// How can we improve using an interface? 

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
}

printVehicle(oldCivic);