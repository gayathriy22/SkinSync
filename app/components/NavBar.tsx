import React from "react";

const NavBar = () => {
  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#FDEEF7",
      borderBottom: "2px solid #F7A8B8",
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
    },
    signInButtonHover: {
      backgroundColor: "#BF5D8C",
    },
  };

  return (
    <nav style={styles.navContainer}>
      <div style={styles.logo}>skinSync</div>
      <div style={styles.navLinks}>
        <a href="#" style={{ ...styles.navLink, ...styles.activeNavLink }}>
          Home
        </a>
        <a href="#" style={styles.navLink}>
          My Skin
        </a>
        <a href="#" style={styles.navLink}>
          Blog
        </a>
      </div>
      <a href="#" style={styles.signInButton}>
        Sign In &#8594;
      </a>
    </nav>
  );
};

export default NavBar;
