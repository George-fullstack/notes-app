import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Тук ще добавим backend логика
    console.log("Login data:", { usernameOrEmail, password });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-500">
      <h1 className="text-3xl text-white font-bold mb-6">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md flex flex-col gap-4 w-80"
      >
        <input
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-white">
        Don't have an account? <Link to="/signup" className="text-blue-800 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
