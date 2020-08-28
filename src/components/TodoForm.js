import React, { useState } from 'react';
import uuid from 'uuid';

function TodoForm() {
	const [todo, setTodo] = useState({
		id: '',
		task: '',
		completed: false
	});

	function handTaskInputChange(e) {
		setTodo({ ...todo, task: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuid.v4() });
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
			<button type="submit" />
		</div>
	);
}

export default TodoForm;
