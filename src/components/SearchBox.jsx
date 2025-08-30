import React, { useState } from "react";
import societyData from "./vehicle.js"; 
import VehicleDetails from "./VehicleDetails";

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const normalize = (str) => str.replace(/[\s-]/g, "").toUpperCase();

  const handleSearch = () => {
    const normalizedInput = normalize(inputValue);

    const match = societyData.find((item) => {
      const vehicle = normalize(item.Vehicle_Num);
      const pass = normalize(item.Pass_Number);

      return (
        vehicle === normalizedInput ||
        pass === normalizedInput ||
        vehicle.endsWith(normalizedInput) ||
        pass.endsWith(normalizedInput)
      );
    });

    setResult(match || null);
    setSearched(true);

    setInputValue("");
  };

  if (showDetails && result) {
    return <VehicleDetails data={result} />;
  }

  // const styles = {
  //   container: {
  //     textAlign: "center",
  //     margin: "20px auto",
  //     maxWidth: "500px",
  //     padding: "10px",
  //   },
  //   inputWrapper: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "10px",
  //     flexWrap: "wrap",
  //     justifyContent: "center",
  //   },
  //   input: {
  //     flex: "1 1 250px",
  //     padding: "100px 150px",
  //     borderRadius: "8px",
  //     // border: "1px solid #ccc",
  //     fontSize: "1rem",
  //     color: "black", // typed text will be black
  //     // outline: "none",
  //     margin: "10px 0",
  //     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  //   },
  //   button: {
  //     padding: "10px 18px",
  //     borderRadius: "8px",
  //     border: "none",
  //     background: "#007bff",
  //     color: "white",
  //     cursor: "pointer",
  //     fontSize: "16px",
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "8px",
  //     transition: "background 0.3s",
  //   },
  //   resultBox: {
  //     marginTop: "20px",
  //   },
  //   successIcon: {
  //     fontSize: "40px",
  //     color: "green",
  //   },
  //   errorIcon: {
  //     fontSize: "40px",
  //     color: "red",
  //   },
  //   validatedText: {
  //     color: "green",
  //     fontWeight: "bold",
  //   },
  //   notValidatedText: {
  //     color: "red",
  //     fontWeight: "bold",
  //   },
  //   detailsButton: {
  //     marginTop: "10px",
  //     padding: "8px 16px",
  //     borderRadius: "5px",
  //     background: "#007bff",
  //     color: "white",
  //     border: "none",
  //     cursor: "pointer",
  //   },
  //   notFound: {
  //     marginTop: "10px",
  //     color: "#555",
  //   },
  // };

  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Enter Vehicle No / Pass No"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
          style={styles.input}
        />

        <button
          onClick={handleSearch}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.background = "#0056b3")}
          onMouseOut={(e) => (e.target.style.background = "#007bff")}
        >
          
        </button>
      </div>

      {result ? (
        <div style={styles.resultBox}>
          <p style={styles.successIcon}>✔</p>
          <button
            style={styles.detailsButton}
            onClick={() => setShowDetails(true)}
          >
            Details Found
          </button>
        </div>
      ) : (
        searched && !result && (
          <div style={styles.resultBox}>
            <p style={styles.errorIcon}>✖</p>
            <p style={styles.notValidatedText}>Not Validated</p>
            <p style={styles.notFound}>Details Not Found</p>
          </div>
        )
      )}
    </div>
  );
}

export default SearchBox;
