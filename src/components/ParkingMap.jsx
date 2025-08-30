import React from "react";
import parking from "./parking.jpeg";  

function ParkingMap() {
  const styles = {
    container: {
      maxWidth: "400px",          // limits size on large screens
      margin: "20px auto",        // center horizontally
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      textAlign: "center",
    },
    image: {
      width: "100%",              // takes full width of container
      height: "250px",            // reduced fixed height
      objectFit: "cover",         // crop nicely without stretch
      display: "block",
    },
  };

  return (
    <div style={styles.container}>
      <img src={parking} alt="Parking Map" style={styles.image} />
    </div>
  );
}

export default ParkingMap;
