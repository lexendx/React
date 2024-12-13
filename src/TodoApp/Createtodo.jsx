import React from "react";

const Createtodo = ({ todo, handleTodo, createTodo, isEditing }) => {
  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        value={todo}
        onChange={handleTodo}
        placeholder="Enter your todo"
      />
      <button type="submit">{isEditing ? "Update" : "Add"} Todo</button>
    </form>
  );
};

export default Createtodo;
