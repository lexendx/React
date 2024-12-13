import React from "react";

const Alltodo = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Alltodo;
