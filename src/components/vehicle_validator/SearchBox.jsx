import React, { useState } from "react";
import societyData from "./vehicle"; // import object array

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const normalize = (str) => str.replace(/[\s-]/g, "").toUpperCase();

  const handleSearch = () => {
    const normalizedInput = normalize(inputValue);

    // Find object by last 4 digits of vehicle number
    const match = societyData.find((item) =>
      item.vehicleNumber.endsWith(normalizedInput)
    );

    if (match) {
      setResult(match);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter last 4 digits of vehicle"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>

      {result ? (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
          <p><strong>Flat:</strong> {result.flatNumber}</p>
          <p><strong>Owner:</strong> {result.ownerName}</p>
          <p><strong>Profession:</strong> {result.ownerProfession}</p>
          <p><strong>Vehicle:</strong> {result.vehicleNumber}</p>
        </div>
      ) : (
        inputValue && <p>❌ No match found</p>
      )}
    </div>
  );
}

export default SearchBox;
