"use client";

import React, { CSSProperties } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navContainer: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 4rem",
    backgroundColor: "#FDEEF7",
    borderBottom: "2px solid #F7A8B8",
    width: "100%",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const logo: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ec4899",
  };

  const navLinks: CSSProperties = {
    display: "flex",
    gap: "2rem",
  };

  const navLink: CSSProperties = {
    fontSize: "1rem",
    color: "black",
  };

  const activeNavLink: CSSProperties = {
    color: "#ec4899",
    fontWeight: "bold",
  };

  const signInButton: CSSProperties = {
    padding: "0.5rem 1rem",
    backgroundColor: "#ec4899",
    color: "white",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  };

  const signInButtonHover: CSSProperties = {
    backgroundColor: "#fbcfe8",
  };

  const getNavLinkStyle = (path: string) => {
    return pathname === path ? activeNavLink : navLink;
  };

  return (
    <nav style={navContainer}>
      <div style={logo}>
        <Image
          src="/skinSyncLogo.png" // Path to your logo image
          alt="skinSync Logo"
          width={150} // Adjust width as needed
          height={50} // Adjust height as needed
        />
      </div>
      <div style={navLinks}>
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
      <a href="/SignIn" style={signInButton}>
        Sign In &#8594;
      </a>
    </nav>
  );
};

export default NavBar;
