import axios from 'axios';

// set the url 
const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
// use axios to get the data from the url
// then log the response into a console log in your terminal
axios.get(url).then(response => {
	// console.log(response.data)
	const todo = response.data as Todo;
	// pull off data property and assign to new variables to make easier to work with 
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
	console.log(`
		The Todo with ID: ${id}
		Has a title of: ${title}
		Is it finished? ${completed}
	`);
};


