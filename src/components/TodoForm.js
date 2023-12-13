import { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const { todo, saveTodo } = props;
  const [value, setValue] = useState(todo?.text || "");
  const inputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();

    if (value) {
      if (todo) {
        saveTodo(value, todo.id);
      } else {
        saveTodo(value);
      }
      setValue("");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="todo-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="todo-btn" type="submit">
        Хадгалах
      </button>
    </form>
  );
}

export default TodoForm;
