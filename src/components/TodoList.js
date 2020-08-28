import React from 'react';

function TodoList() {
	return (
		<div>
			<ul>
				{TodoList.map(todo => (
					<Todo key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
