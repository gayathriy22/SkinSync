"use client";

import React, { useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
// import { db } from "../firebase";
import { db } from "../app/firebase"
// import { useNavigate } from "react-router-dom";


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Invalid email or password");
      } else {
        querySnapshot.forEach((doc) => {
          localStorage.setItem("userid", doc.id);
        });
        // navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="form-input">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="form-input">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">
            Sign In
          </button>
        </div>
        <div className="form-group">
          <p>
            Don't have an account?{" "}

            {/* updateee */}
            <a href="../SignIn">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
