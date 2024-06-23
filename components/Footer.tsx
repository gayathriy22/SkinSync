import React from "react";

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#FDEEF7",
      padding: "1rem 4rem",
      borderTop: "2px solid #F7A8B8",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
      bottom: 0,
      left: 0,
      width: "100%",
      position: "fixed" as "fixed",
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <p>&copy; made with 💖 in berkeley.</p>
    </footer>
  );
};

export default Footer;
