import React, { useState } from "react";
import Createtodo from "./Createtodo";
import Alltodo from "./Alltodo";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  // Add or update todo
  const createOrUpdateTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Empty todo");
      return;
    }

    if (editId) {
      // Update existing todo
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { ...t, text: todo } : t
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        text: todo,
        id: Date.now(),
      };
      setTodos([...todos, newTodo]);
    }

    setTodo(""); // Clear input field
  };

  // Edit a todo
  const handleEdit = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    setTodo(todoToEdit.text);
    setEditId(id);
  };

  // Delete a todo
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <Createtodo
        todo={todo}
        handleTodo={handleTodo}
        createTodo={createOrUpdateTodo}
        isEditing={!!editId}
      />
      <Alltodo
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoWrapper;
