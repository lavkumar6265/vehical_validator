import React, { useState } from "react";
import Header from "./Heador";
import ParkingMap from "./ParkingMap";
import ValidationBox from "./ValidationBox";
import AddressBox from "./AddressBox";
import BottomNav from "./BottomNav";
import ValidDetail from "./VehicleDetails";   // ✅ अब सही import
import societyData from "./vehicle";

function Vehicle_Container() {
    const [inputValue, setInputValue] = useState("");
    const [status, setStatus] = useState(null); // null | valid | invalid
    const [validData, setValidData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const normalize = (str) => str.replace(/[\s-]/g, "").toUpperCase();

    const handleSearch = () => {
        const normalizedInput = normalize(inputValue);

        const match = societyData.find((item) => {
            const vehicle = normalize(item.Vehicle_Num);
            const pass = normalize(item.Pass_Number);

            return (
                vehicle.includes(normalizedInput) ||
                vehicle.endsWith(normalizedInput) ||
                pass.includes(normalizedInput) ||
                pass.endsWith(normalizedInput)
            );
        });

        if (match) {
            setValidData(match);
            setStatus("valid");
        } else {
            setStatus("invalid");
        }
    };


    if (showDetails && validData) {
        return <ValidDetail data={validData} />;
    }

    return (
        <div className="vehicle-container">
            <Header />
            <ParkingMap />
            <div
                className="search-section"
                style={{
                    textAlign: "center", // centers both input and button
                    marginTop: "20px",
                }}
            >
                <input
                    type="text"
                    placeholder="Enter vehicle or pass number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        display: "inline-block",
                        padding: "12px 15px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        color: "black",
                        outline: "none",
                        width: "250px",   // ✅ fixed width instead of 100%
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        marginRight: "10px", // ✅ spacing between input and button
                    }}
                />

                <button
                    onClick={handleSearch}
                    style={{
                        display: "inline-block",
                        padding: "12px 18px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "hsla(0, 0%, 98%, 1.00)",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "18px",
                    }}
                >
                    🔍
                </button>
            </div>

            {/* Status Box */}
            {status === "valid" && validData && (
                <div className="result">

                    <p>✅ Vehicle Validated</p>
                    <button onClick={() => setShowDetails(true)}>📄 Detailed Found</button>
                </div>
            )}

            {status === "invalid" && (
                <div className="result">
                    <p>❌ Vehicle Not Found</p>
                </div>
            )}

            <AddressBox />
            <BottomNav />
        </div>
    );
}

export default Vehicle_Container;
