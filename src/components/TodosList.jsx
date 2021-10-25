import React from "react";

export const TodosList = ({
  todos = [],
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}) => {
  const toggleTodoStatus = (event, id) => {
    onToggleTodo(id, event.target.checked);
  };

  return (
    <>
      <h3>TO List</h3>
      <ul className="todo-list">
        {todos.map(({ id, title, completed }) => (
          <li key={id} className="list-item">
            <input
              type={"checkbox"}
              checked={completed}
              onChange={(event) => toggleTodoStatus(event, id)}
            />
            {title}
            <button onClick={() => onDeleteTodo(id)}>Delete</button>
            <button onClick={() => onEditTodo(id)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};
