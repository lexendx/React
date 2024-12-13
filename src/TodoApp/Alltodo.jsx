import React from "react";

const Alltodo = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="space-y-4">
      {todos.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between p-2 bg-white rounded-md shadow-md"
        >
          <span className="text-gray-700">{t.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(t.id)}
              className="p-1 px-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(t.id)}
              className="p-1 px-3 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Alltodo;
