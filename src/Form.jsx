const Form = ({ handleSubmit, title, setTitle, inputRef }) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        className="input--input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo"

      />
      <button type="submit" className="input--button">
        Add Todo
      </button>
    </form>
  );
};

export default Form;