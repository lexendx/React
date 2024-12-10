import { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleUseremail = (e) => {
    setUseremail(e.target.value);
  };

  const handleUserpassword = (e) => {
    setUserpassword(e.target.value);
  };

  const forSubmit = (e) => {
    e.preventDefault();
    console.log({ username, useremail, userpassword });
    setUsername("");
    setUseremail("");
    setUserpassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
        onSubmit={forSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Register
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="text"
            value={username}
            onChange={handleUsername}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="email"
            value={useremail}
            onChange={handleUseremail}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="password"
            value={userpassword}
            onChange={handleUserpassword}
            placeholder="Enter your password"
          />
        </div>

        <button
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForms1;
