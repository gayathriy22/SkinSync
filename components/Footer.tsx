import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FDEEF7",
        padding: "1rem 4rem",
        borderTop: "2px solid #F7A8B8",
        textAlign: "center" as "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        bottom: 0,
        left: 0,
        width: "100%",
        position: "fixed" as "fixed",
      }}
    >
      <p>&copy; made with 💖 in Berkeley.</p>
    </footer>
  );
};

export default Footer;
