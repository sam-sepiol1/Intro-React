function TodoList({ todos, handleCheck, removeTodo }) {
	return (
		<>
		<ul className="todo-list">
			{todos.map((todo) => (
				<li key={todo.id} className="todo-list--item">
					<input type='checkbox' checked={todo.completed} onChange={() => handleCheck(todo.id)} />
					{todo.completed ? <del>{todo.text}</del> : <span>{todo.text}</span>}
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</li>
			))}
		</ul>
		<h2>You have {todos.filter((todo) => !todo.completed).length} todos left</h2>
		</>
	);
}

export default TodoList;
