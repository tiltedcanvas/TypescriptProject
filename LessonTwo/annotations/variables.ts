// Type annotations: code we add to tell typescript what type of value a variable refers to
// Type inference: typescript tries to figure out what ty pe of value a variable refers to
// these are low key at odds with each other while being similar. annotations - we will tell the type, inference - typescript will guess the type.


let apples: number = 5;
// The type annotation is
// : number
// this tells typescript to always only attatch numbers to the variable 'apple'

apples = 10;

// apples = thisIsWrongTypeScriptAgrees;

// type annotations can be used with any type of value

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
// this is the first example of a value that is identical to it's type

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
// variable called 'now' that can only be assigned the value of Type Date... and on the other side we assign an instance of a Date Object

// array
let colours: string[] = ['red', 'green', 'blue'];
// this says we're going to have something assigned to colours that is a type array, that contains strings. 

let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
// classes are almost always capitalized first letter
// if it's all lowercase it is an instance
class Car {

}
let car: Car = new Car();

// Type annotation for an Object literal
// make an object with an X property that is a number and a Y property that is a number to a variable point
let point: { x: number; y: number; } = {
	x: 10,
	y: 20
};

// Type annotation for a Function
// normal function
	// const logNumber = (i) => {
	// 	console.log(i);
	// };

// Type syntax
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};
// THIS IS THE ANNOTATION
// : (i: number) => void 
// This is not a function that runs, it's a description of a function



// NOTE
// we could delete all annotations in
// this file and it will still know the correct ones.
// This is because of type inference

// When to use annotations
// 1) function that returns the 'any'
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
// if you hover over coordinates it returns the 'any'
// ==========================================
// 'false' -> JSON.parse() -> boolean
// '4' -> JSON.parse() -> number
// '{"value": 5}' -> JSON.parse() -> {value: number}
// '{"name": "alex"}' -> JSON.parse() -> {name: string}
// ==========================================
// you can clearly pass in different strings into function and get back varied value Types back
// this diagram helps you understand that whenever you call
// JSON.parse, it can give all these different Types
// because of this, it can't guess with inference 
// it can't predict so it names it as 'any'
// therefore we have to declare
