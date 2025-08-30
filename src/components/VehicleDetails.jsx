import React from "react";

import BottomNav from "./BottomNav";

function ValidDetail({ data }) {
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px 30px",
      background: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Segoe UI, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#2d6a4f",
      marginBottom: "10px",
    },
    subHeading: {
      textAlign: "center",
      margin: "10px 0",
      fontSize: "1.3rem",
      color: "#1d3557",
    },
    para: {
      fontSize: "1rem",
      color: "#333",
      margin: "6px 0",
      lineHeight: "1.5",
    },
    strong: {
      color: "#222",
    }
  };

  return (
    <>
    <div style={styles.container}>
      <h2 style={styles.heading}>✅ Vehicle Validated</h2>
      <h2 style={styles.heading}>IT Part Bhopal</h2>
      <h3 style={styles.subHeading}>{data.Vehicle_Num}</h3>
      <p style={styles.para}><strong style={styles.strong}>Flat Number:</strong> {data.Flat_Number}</p>
      <p style={styles.para}><strong style={styles.strong}>Pass Number:</strong> {data.Pass_Number}</p>
      <p style={styles.para}><strong style={styles.strong}>Vehicle Owner:</strong> {data.Vehicle_Owner_Name}</p>
      <p style={styles.para}><strong style={styles.strong}>Owner Contact:</strong> {data.V_Owner_Contact}</p>
      <p style={styles.para}><strong style={styles.strong}>Flat Owner:</strong> {data.Flat_Owner_Name}</p>
      <p style={styles.para}><strong style={styles.strong}>Flat Contact:</strong> {data.Flat_Owner_Contact}</p>
      <p style={styles.para}><strong style={styles.strong}>Pass Validity:</strong> {data.Pass_Validity}</p>
    </div>
    <BottomNav/>
    </>
  );
}

export default ValidDetail;
