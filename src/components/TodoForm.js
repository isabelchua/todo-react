import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuidv4() });
			//reset task input
			setTodo({ ...todo, task: '' });
		}
	}

	return (
		<div>
			<input
				name="task"
				type="text"
				value={todo.task}
				onChange={handleTaskInputChange}
			/>
			<button type="submit" onClick={handleSubmit}>
				add
			</button>
		</div>
	);
}

export default TodoForm;
