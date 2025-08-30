import React from "react";

function AddressBox() {
  const styles = {
    container: {
      maxWidth: "90%",          // responsive width
      margin: "20px auto",      // center horizontally
      padding: "15px 20px",     // spacing inside
      background: "#ffffff",    // white card style
      borderRadius: "10px",     // rounded edges
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // soft shadow
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "center",      // center text
    },
    text: {
      fontSize: "1rem",         // base font
      color: "#333",            // dark grey for readability
      lineHeight: "1.2",
      // wordWrap: "break-word",   // prevent overflow
    },
    responsive: {
      fontSize: "0.9rem",       // smaller font for very small screens
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        IT Part Bhopal Near By RJPV Univercity
      </p>
    </div>
  );
}

export default AddressBox;
