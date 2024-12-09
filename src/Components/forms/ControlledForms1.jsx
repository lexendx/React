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
    console.log(username, useremail, userpassword);
  };

  return (
    <div>
      <form onSubmit={forSubmit}>
        <h2>Register</h2>

        <label>Name</label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
        />

        <label>Email</label>
        <input
          type="email"
          value={useremail}
          onChange={handleUseremail}
        />

        <label>Password</label>
        <input
          type="password"
          value={userpassword}
          onChange={handleUserpassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
