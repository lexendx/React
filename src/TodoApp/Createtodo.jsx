import React, { useState } from 'react';

const CreateTodo = () => {
  const [todo, setTodo] = useState('');

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Todo submitted:', todo);
    // Add your logic to save the todo here
    setTodo(''); // Clear the input field after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Create Todo</h2>
          <input
            type="text"
            placeholder="Enter todo..."
            value={todo}
            onChange={handleTodo}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
