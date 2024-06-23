"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 4rem", // Adjusted padding for more width
      backgroundColor: "#FDEEF7",
      borderBottom: "2px solid #F7A8B8",
      width: "100%", // Ensure it takes full width of the container
      boxSizing: "border-box", // Include padding in the element's total width and height
      position: "fixed", // Fix the nav bar to the top of the page
      top: 0, // Position it at the top
      left: 0, // Position it at the left
      zIndex: 1000, // Ensure it stays on top of other elements
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#D17EB6",
      fontFamily: "'Poppins', sans-serif",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
    },
    navLink: {
      fontSize: "1rem",
      textDecoration: "none",
      color: "black",
      fontFamily: "'Poppins', sans-serif",
    },
    activeNavLink: {
      color: "#D17EB6",
      fontWeight: "bold",
    },
    signInButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "#D17EB6",
      color: "white",
      borderRadius: "5px",
      textDecoration: "none",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold", // Make the text bold
      WebkitTextStroke: "1px black", // Outline the text in black
    },
    signInButtonHover: {
      backgroundColor: "#BF5D8C",
    },
  };

  const getNavLinkStyle = (path) => {
    return pathname === path ? styles.activeNavLink : styles.navLink;
  };

  return (
    <nav style={styles.navContainer}>
      <div style={styles.logo}>
        <Image
          src="/skinSyncLogo.png" // Path to your logo image
          alt="skinSync Logo"
          width={150} // Adjust width as needed
          height={50} // Adjust height as needed
        />
      </div>
      <div style={styles.navLinks}>
        <a href="/" style={getNavLinkStyle("/")}>
          Home
        </a>
        <a href="/MySkin" style={getNavLinkStyle("/MySkin")}>
          My Skin
        </a>
        <a href="/Blog" style={getNavLinkStyle("/Blog")}>
          Blog
        </a>
      </div>
      <a href="/SignIn" style={styles.signInButton}>
        Sign In &#8594;
      </a>
    </nav>
  );
};

export default NavBar;
