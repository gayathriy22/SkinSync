"use client";

import React, { useState, useEffect } from "react";
import { db } from "../firebase.ts";
import { doc, getDocs, query, where, collection } from "firebase/firestore";




const getSavedSkinType = async (setSkinType: React.Dispatch<React.SetStateAction<string | null>>) => {
  // const loggedInUser = localStorage.getItem("username");
  const loggedInUser = "eliseji";
  if (loggedInUser) {
    // Query the users collection to find the document where the username matches the logged-in user
    const usersCollection = collection(db, "users");
    const userQuery = query(usersCollection, where("username", "==", loggedInUser));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0]; // Assuming username is unique and we only get one document
      const userData = userDoc.data();

      const skintype = userData.skintype;
      setSkinType(skintype);
    } else {
      console.error("No matching documents found.");
    }
  } else {
    console.error("No logged-in user found.");
  }
};

const AIPage: React.FC = () => {
  const [skinType, setSkinType] = useState<string | null>(null);

  useEffect(() => {
    getSavedSkinType(setSkinType);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {/* <img className="login-logo" src={logo3}></img> */}
        <p>hi</p>
        <p>hi</p>

        <p>hi</p>
        <p>hi</p>
        <p>hi</p>

        {skinType ? <p>Your skin type is: {skinType}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default AIPage;
