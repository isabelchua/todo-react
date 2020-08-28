import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}
	return (
		<div style={{ display: 'flex' }}>
			<input type="checkbox" onClick={handleCheckboxClick} />
			<li
				style={{
					color: 'white',
					textDecoration: todo.completed ? 'linethrough' : null
				}}
			>
				{todo.task}
			</li>
			<button onClick={handleRemoveClick}>submit</button>
		</div>
	);
}

export default Todo;
