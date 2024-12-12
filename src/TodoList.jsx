export const Header = () => {
    return (
        <div className="header">
            <h1 id="title" className="header--title">Todo List</h1>
        </div>
    )
}

export const Input = () => {
    return (
        <form className="input">
            <input className="input--input" type="text" placeholder="Add todo" />
            <button type="submit" className="input--button">Add Todo</button>
        </form>
    )
}

export const TodoList = () => {
    return (
        <>
        <h2>Todo List</h2>
        <ul className="todo-list">
            <li className="todo-list--item"><input type="checkbox"></input>Todo 1</li>
            <li className="todo-list--item"><input type="checkbox"></input>Todo 2</li>
            <li className="todo-list--item"><input type="checkbox"></input>Todo 3</li>
        </ul>
        </>
    )
}

