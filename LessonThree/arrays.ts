const carMakers = ['ford', 'toyota', 'chevy'];

// typescript uses inference to know that all carMakers is now a variable that always points at an array that contains nothing but strings
// const carMakers = []; will produce 'any' (bad!)

const dates = [new Date(), new Date()];
// knows it will be an array with an instance of dates


// 2 dimensional array
const carsByMake = [
	['f150'],
	['corolla'],
	['camaro']
];
// type inference knows carsByMake will be an array that contains an array of strings

// const carsByMake: string[][] = [];

// Help with inference when extracting  values
const car = carMakers[0];
const myCar = carMakers.pop(); // remove last element of array

// Prevent incompatible values
// carMakers.push(100); // will produce an error saying we're using the wrong value in the 100

// help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});
// note: this above mapping help is cool. 

// flexible types
const importantDates = [new Date(), '2030-10-10'];
// above allows you to confirm it can be a date OR a string 

const importantDatesTwo: (Date | string)[] = [new Date()];
importantDatesTwo.push('2030-10-10');
importantDatesTwo.push(new Date());
// importantDatesTwo.push(100); // produces an error because it is not a date or a string


