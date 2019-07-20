import Todo from '../models/todo.model';
var ToDoComponent = require('../components/todo.component')(Todo);

export default function(app){

	app.get('/api/todos', ToDoComponent.GetTodo);
	
	app.post('/api/todos', ToDoComponent.PostTodo);

	app.put('/api/todos/:todo_id', ToDoComponent.UpdateTodo);

	app.delete('/api/todos/:todo_id', ToDoComponent.DeleteTodo);

}