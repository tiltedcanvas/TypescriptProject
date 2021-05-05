const add = (a: number, b: number): number => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
}

// alternate forms of syntax around annotations for functions

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function(a: number, b: number): number {
	return a * b;
}

const logger = (message: string): void => {
	console.log(message);
}

const throwError = (message: string): never => {
	throw new Error(message);
};

// we only annotate a function with a Type Never if we expect it to truly NEVER return anything

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

// ES2015
// const logWeather = ({ date, weather }: { date: Date, weather: string}):) => {
// 	console.log(date);
// 	console.log(weather);
// }

logWeather(todaysWeather);

