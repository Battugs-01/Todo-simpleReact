import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random().toString(),
          text: action.payload.text,
          isCompleted: false,
          isEditing: false,
        },
      ];

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, isEditing: false }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case "TOGGLE_EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );

    default:
      return state;
  }
}
function TodoWrapper() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random().toString(),
      text: "Хог шүүрдэх",
      isCompleted: false,
      isEditing: false,
    },
  ]);
  //   const [todos, setTodos] = useState([
  //     {
  //       id: Math.random().toString(),
  //       text: "Хог шүүрдэх",
  //       isCompleted: false,
  //       isEditing: false,
  //     },
  //   ]);

  const addTodo = (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: { text },
    });
  };

  const editTodo = (text, id) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { text, id },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: { id },
    });
  };

  const toggleEdit = (id) => {
    dispatch({
      type: "TOGGLE_EDIT",
      payload: { id },
    });
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo Жагсаалт</h1>
      <TodoForm saveTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoForm todo={todo} saveTodo={editTodo} />
        ) : (
          <TodoItem
            key={todo?.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            toggleEdit={toggleEdit}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
