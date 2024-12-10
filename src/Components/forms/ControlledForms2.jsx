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
    <div className="bg-orange-300">
      <h1>Controlled Forms Optimal Way</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="useremail">User Email:</label>
        <input
          type="email"
          id="useremail"
          name="useremail"
          value={formData.useremail}
          onChange={handleFormData}
        />
        <br />
        <br />
        <label htmlFor="userpassword">Password:</label>
        <input
          type="password"
          id="userpassword"
          name="userpassword"
          value={formData.userpassword}
          onChange={handleFormData}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
