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
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={forSubmit}
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Register</h2>

        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
          Name
        </label>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
          Email
        </label>
        <input
          type="email"
          value={useremail}
          onChange={handleUseremail}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>
          Password
        </label>
        <input
          type="password"
          value={userpassword}
          onChange={handleUserpassword}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForms1;
