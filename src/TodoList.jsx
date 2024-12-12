import { useState } from 'react'

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
    const initalTodos = [
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: false },
        { id: 3, text: "Todo 33333", completed: false },
        { id: 4, text: "Todo 4", completed: false },
    ]

    const [todos, setTodos] = useState(initalTodos)
    return (
        <>
        <h2>Todo List</h2>
        <ul className="todo-list">
            {todos.map((todo) => (
                <li className="todo-list--item" key={todo.id}> <input type="checkbox" />{todo.text}</li>
            ))}
        </ul>
        </>
    )
}

