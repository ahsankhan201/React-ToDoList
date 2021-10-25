import { useState } from "react";
import { TodoForm, TodosList } from "./components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodoItem, setEditTodoItem] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id, status) => {
    const updatedTodos = todos.map((x) =>
      x.id === id ? { ...x, completed: status } : x
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((x) => x.id !== id);
    setTodos(remainingTodos);
  };

  const editTodo = (id) => {
    const todoItem = todos.find((x) => x.id === id);
    setEditTodoItem(todoItem);
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((x) => (x.id === todo.id ? todo : x));
    setTodos(updatedTodos);
    setEditTodoItem(null)
  };

  return (
    <div className="App">
      <TodoForm
        onAddTodo={addTodo}
        editTodoItem={editTodoItem}
        onUpdateTodo={updateTodo}
      />
      <TodosList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
}

export default App;
