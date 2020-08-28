import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {
	const [todo, setTodo] = useState({
		id: '',
		task: '',
		completed: false
	});

	//when adding new task
	function handleTaskInputChange(e) {
		setTodo({ ...todo, task: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(todo.task.trim());
		//removes white space from start and end
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuidv4() });
			//reset task input
			setTodo({ ...todo, task: '' });
		}
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<TextField
				label="Task"
				name="task"
				type="text"
				value={todo.task}
				onChange={handleTaskInputChange}
			/>
			<Button type="submit">add</Button>
		</form>
	);
}

export default TodoForm;
