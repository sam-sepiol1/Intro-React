function TodoList({ todos, handleCheck }) {
	return (
		<ul className="todo-list">
			{todos.map((todo) => (
				<li key={todo.id} className="todo-list--item">
					<input type='checkbox' checked={todo.completed} onChange={() => handleCheck(todo.id)} />
					{todo.completed ? <del>{todo.text}</del> : <span>{todo.text}</span>}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
