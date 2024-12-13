import React from "react";

const Createtodo = ({ todo, handleTodo, createTodo, isEditing }) => {
  return (
    <form
      onSubmit={createTodo}
      className="flex flex-col gap-4 mb-6"
    >
      <input
        type="text"
        value={todo}
        onChange={handleTodo}
        placeholder="Enter your todo"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className={`p-2 rounded-md ${
          isEditing
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {isEditing ? "Update" : "Add"} Todo
      </button>
    </form>
  );
};

export default Createtodo;
