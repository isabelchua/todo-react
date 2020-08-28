import React from 'react';

function Todo() {
	return (
		<div>
			<input type="checkbox" />
			<li>{Todo.task}</li>
			<button>x</button>
		</div>
	);
}

export default Todo;
