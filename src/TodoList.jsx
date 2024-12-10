import { useState } from "react"


const List = () => {
    const handleCheck = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        }));
    }
    const initialTodos = [
        {id: 1, text: "Learn React", isCompleted: false},
        {id: 2, text: "Learn React again", isCompleted: false},
        {id: 3, text: "Go home", isCompleted: false}
    ];
    
    
    const [todos, setTodos] = useState(initialTodos);

    return (
        <ul className="list">
            {todos.map((todo, index) => {
                return <li key={index}> 
                <input 
                id="{todo.id}" 
                type="checkbox" 
                name="{todo.name}" 
                checked={todo.isCompleted}
                onChange={() =>handleCheck(todo.id)} /> {todo.text}
                </li>
            })}
        </ul>
    )
}

export default List