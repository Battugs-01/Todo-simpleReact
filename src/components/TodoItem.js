function TodoItem(props) {
  const { todo, deleteTodo, toggleComplete, toggleEdit } = props;

  return (
    <div className="TodoItem">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={todo.isCompleted ? "completed" : ""}
      >
        {todo?.text}
      </p>
      <div>
        <button className="todo-btn" onClick={() => toggleEdit(todo.id)}>
          Засах
        </button>
        <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>
          Устгах
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
