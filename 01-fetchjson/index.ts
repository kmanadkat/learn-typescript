import axios from 'axios'

// Interface
interface Todo {
	id: number
	title: string
	completed: boolean
}

// Console Todo Logger
const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
    ID        : ${id},
    Title     : ${title},
    Completed : ${completed}
  `)
}

// Fetch & Log Todo
const fetchLogTodo = (todoId: String) => {
	const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`

	axios.get(url).then((res) => {
		const todo = res.data as Todo
		const { id, title, completed } = todo
		logTodo(id, title, completed)
	})
}

fetchLogTodo('1')
