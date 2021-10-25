import { useState, useEffect } from "react";

export const TodoForm = ({ onAddTodo, editTodoItem, onUpdateTodo }) => {
  const [todo, setTodo] = useState("");

  useEffect(
    function updateTodoInputOnEdit() {
      if (editTodoItem) setTodo(editTodoItem.title);
    },
    [editTodoItem]
  );

  const updateInput = (event) => {
    setTodo(event.target.value);
  };

  const handleFormSubmission = (event) => {
    // To override the default behavior of form that refreshes the page
    event.preventDefault();
    if (!todo) return;
    if (editTodoItem) {
      const todoItem = {
        ...editTodoItem,
        title: todo,
      };
      onUpdateTodo(todoItem);
    } else {
      const todoItem = {
        id: Date.now(),
        title: todo,
        completed: false,
      };
      onAddTodo(todoItem);
    }
    setTodo("");
  };

  return (
      <div className="todo-form">
          <h3>Add TODO</h3>
    <form onSubmit={handleFormSubmission}>
      <input value={todo} onChange={updateInput} />
      <button className="form-button" type="submit">{editTodoItem ? "Update" : "Add"}</button>
    </form>
    </div>
  );
};
