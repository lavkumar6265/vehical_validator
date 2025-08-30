import React from "react";

function BottomNav() {
  const styles = {
    nav: {
      marginTop: "30px", // space before footer
      width: "100%",
      background: "#ffffff",
      padding: "10px 0",
      display: "flex",
      justifyContent: "space-around",
      boxShadow: "0 -3px 8px rgba(0,0,0,0.1)",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      fontFamily: "Segoe UI, sans-serif",
    },
    button: {
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#2d6a4f",
      transition: "0.2s ease",
    },
    buttonHover: {
      transform: "scale(1.2)",
      color: "#1d3557",
    }
  };

  return (
    <nav style={styles.nav}>
      <button style={styles.button}>🏠</button>
      <button style={styles.button}>📋</button>
      <button style={styles.button}>🛑</button>
      <button style={styles.button}>👤</button>
      <button style={styles.button}>⚙️</button>
    </nav>
  );
}

export default BottomNav;
