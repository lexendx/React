import React, { useState } from "react";
import Createtodo from "./Createtodo";
import Alltodo from "./Alltodo";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const createOrUpdateTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Empty todo");
      return;
    }

    if (editId) {
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { ...t, text: todo } : t
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      const newTodo = {
        text: todo,
        id: Date.now(),
      };
      setTodos([...todos, newTodo]);
    }

    setTodo("");
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    setTodo(todoToEdit.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
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
