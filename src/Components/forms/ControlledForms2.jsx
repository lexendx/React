import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    useremail: "",
    userpassword: "",
  });

  // Handle input changes
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-300 via-pink-300 to-red-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Controlled Forms Optimal Way
        </h1>
        <form onSubmit={formSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="useremail"
              className="block text-sm font-medium text-gray-700"
            >
              User Email:
            </label>
            <input
              type="email"
              id="useremail"
              name="useremail"
              value={formData.useremail}
              onChange={handleFormData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="userpassword"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="userpassword"
              name="userpassword"
              value={formData.userpassword}
              onChange={handleFormData}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledForms2;
