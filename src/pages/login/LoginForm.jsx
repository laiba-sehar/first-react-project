import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Navigate, Route, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username is empty
    if (!username.trim()) {
      setUsernameError("Please enter your username.");
    } else if (username !== "ahmad") {
      setUsernameError("Incorrect Username");
    }

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError("Please enter your password.");
    } else if (password !== "ahmad1234") {
      setPasswordError("Incorrect Password");
    }

    // If there are errors, don't proceed with the login logic
    if (username.trim() == "ahmad" && password == "ahmad1234") {
      // return <Navigate to="/dashboard" />;
      // Reset the form after successful login
      setUsername("");
      setPassword("");
      return navigate("dashboard");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className={`input-box ${usernameError ? "error" : ""}`}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="Icon1" />
          {usernameError && <p className="error">{usernameError}</p>}
        </div>
        <div className={`input-box ${passwordError ? "error" : ""}`}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <IoMdEye className="Icon2" onClick={() => setShowPassword(false)} />
          ) : (
            <IoMdEyeOff
              className="Icon2"
              onClick={() => setShowPassword(true)}
            />
          )}
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
