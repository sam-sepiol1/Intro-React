import { useRef } from 'react';

const Form = () => {

  return (
    <form className="input">
      <input className="input--input" type="text" name="todo" placeholder="Add todo"/>
      <button type="submit" className="input--button">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
