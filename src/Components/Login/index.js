import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../Authentication";

const LoginBase = () => {
  const [alreadyAMember, setAlreadyAMember] = useState(true);
  function handleToggle() {
    setAlreadyAMember(prev => !prev);
  }
  if (alreadyAMember) {
    return <Login handleToggle={handleToggle} />;
  }
  return <SignUp handleToggle={handleToggle} />;
};

const Login = ({ handleToggle }) => {
  const { setUser } = useContext(AuthenticationContext);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm(prev => ({
      ...prev,
      [key]: value
    }));
  }
  async function handleLogin() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    const result = await response.json();
    setUser(result);
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        Username
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleInputChange}
        />
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        Don't have an account? <button onClick={handleToggle}>Sign Up</button>
      </div>
    </div>
  );
};

const SignUp = ({ handleToggle }) => {
  const { setUser } = useContext(AuthenticationContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    error: null
  });
  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm(prev => ({
      ...prev,
      [key]: value
    }));
  }
  async function handleSignUp() {
    if (form.password !== form.verifyPassword) {
      setForm(prev => ({
        ...prev,
        error: "Passwords do not match."
      }));
      return;
    }

    if (form.username.trim() === "") {
      setForm(prev => ({
        ...prev,
        error: "Username cannot be blank."
      }));
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        email: form.username
      })
    });
    const result = await response.json();
    setUser(result);
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <div>{form.error}</div>
      <div>
        Username
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleInputChange}
        />
        Email
        <input
          name="email"
          type="text"
          value={form.email}
          onChange={handleInputChange}
        />
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleInputChange}
        />
        Verify Password
        <input
          name="verifyPassword"
          type="password"
          value={form.verifyPassword}
          onChange={handleInputChange}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      <div>
        Already an account? <button onClick={handleToggle}>Login</button>
      </div>
    </div>
  );
};

export default LoginBase;
