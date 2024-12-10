import {useRef} from 'react'

const Form = () => {
    const inputRef = useRef();

    function handleSubmit() {
        const inputElement = inputRef.current;
        console.log(inputElement.value);
    }

    return (
        <form className="input-button" onSubmit={handleSubmit}>
            <input 
            type="text"
            name="todo" 
            placeholder="Type a new todo"
            ref={inputRef}
             />
            <button type="submit" className="button"> Add Todo </button>
        </form>
    )
}

export default Form