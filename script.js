console.log("hello");
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((res) => res.json())
// 	.then((todos) => console.log(todos));
async function getTodos() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data);
}

getTodos();
