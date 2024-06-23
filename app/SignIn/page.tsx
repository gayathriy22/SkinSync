"use client";

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';

const UserAccountForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skintype, setSkintype] = useState('');

  const handleSkintype = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkintype(e.target.value);
  };

  const handleSensitive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSensitive(e.target.value);
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
      });
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem('userid', docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Create Account</h1>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-pink-500">Personal Information</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <fieldset>
            <legend className="block text-gray-700 font-bold mb-2">Skin Type</legend>
            <div className="flex items-center mb-2">
              <input
                id="oily"
                name="skintype"
                type="radio"
                value="oily"
                onChange={handleSkintype}
                className="mr-2"
              />
              <label htmlFor="oily" className="text-gray-700">Oily</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="dry"
                name="skintype"
                type="radio"
                value="dry"
                onChange={handleSkintype}
                className="mr-2"
              />
              <label htmlFor="dry" className="text-gray-700">Dry</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="combination"
                name="skintype"
                type="radio"
                value="combination"
                onChange={handleSkintype}
                className="mr-2"
              />
              <label htmlFor="combination" className="text-gray-700">Combination</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="idk"
                name="skintype"
                type="radio"
                value="idk"
                onChange={handleSkintype}
                className="mr-2"
              />
              <label htmlFor="idk" className="text-gray-700">I'm not sure</label>
            </div>
          </fieldset>
        </div>
        
        <button type="submit" className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
          Submit
        </button>
      </form>
    </div>
  );
};

const SignInPage: React.FC = () => {
  return (
    <div>
      <UserAccountForm />
    </div>
  );
};

export default SignInPage;
