const Header = () => {
    return (
        <header>
            <h1> My Todo App </h1>
        </header>
    )
}

const Input = () => {
    return (
        <input className="input" type="text" placeholder="Type a new todo" />
    )
}

const Button = () => {
    return (
        <button className="button"> Add Todo </button>
    )
}

const List = () => {
    return (
        <ul className="list">
            <li> <input type="checkbox" /> Todo 1 </li>
            <li> <input type="checkbox" /> Todo 2 </li>
            <li> <input type="checkbox" /> Todo 3 </li>
        </ul>
    )
}


export { Header, Input, Button, List }