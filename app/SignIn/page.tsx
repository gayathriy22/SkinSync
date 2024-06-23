"use client";


import NavBar from "@/components/NavBar";

// import React, { useState, ChangeEvent, FormEvent } from 'react';
import React, { useState } from 'react';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
// import { useClient } from 'next/client';


// import { useNavigate } from 'react-router-dom';

const UserAccountForm: React.FC = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[skintype, setSkintype] = useState('');
  const[sensitive, setSensitive] = useState('');
  
  const[error, setError] = useState(false);
  // const navigate = useNavigate();


  const handleSkintype = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkintype(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    
  
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username,
        password,
        name,
        email,
        skintype,
        sensitive
      });
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem('userid', docRef.id);
      // navigate('/')

    } catch (e) {
      console.error("Error adding document: ", e)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Create Account</h1>
        <p>Already have an account? <a href="/login">Log in</a></p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>




        <h2>Personal Information</h2>
        
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        {/* <div>
          <label htmlFor="skintype">Skin Type</label>
          <select
            id="skintype"
            name="skintype"
            value={skintype}
            onChange={handleSkintype}
            required
          >
            <option value="Dry">Dry</option>
            <option value="Oily">Oily</option>
            <option value="Combination">Combination</option>
            <option value="I'm not sure">IDK</option>
          </select>
        </div> */}

        <div>
          <legend> Skin Type</legend>
          <div>
            <input
              id="oily"
              name="skintype"
              type="radio"
              value="oily"
              onChange={handleSkintype}
            />
            <label htmlFor="oily">Oily</label>
          </div>

          <div>
            <input
              id="dry"
              name="skintype"
              type="radio"
              value="dry"
              onChange={handleSkintype}
            />
            <label htmlFor="dry">Dry</label>
          </div>

          <div>
            <input
              id="combination"
              name="skintype"
              type="radio"
              value="combination"
              onChange={handleSkintype}
            />
            <label htmlFor="combination">Combination</label>
          </div>

          <div>
            <input
              id="idk"
              name="skintype"
              type="radio"
              value="idk"
              onChange={handleSkintype}
            />
            <label htmlFor="idk">I'm not sure</label>
          </div>
        
        
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


const SignInPage: React.FC = () => {
  // Use useClient hook to mark the component as client-side
  // useClient();

  // Render UserAccountForm component
  return (
    <div>
      <UserAccountForm />
    </div>
  );
};

// Export SignInPage as default
export default SignInPage;



