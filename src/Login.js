import React, { useState } from "react";
// import "./LoginForm.css"; // Optional for styling

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Both fields are mandatory.");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>XLogin</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
      {message && <div className={`message ${message === "Welcome, user!" ? "success" : ""}`}>{message}</div>}
    </form>
  );
};

export default LoginForm;
