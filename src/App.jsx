import React, { useState } from "react";
import Vehicle_Container from "./components/Vehicle_Container";
import VehicleDetails from "./components/VehicleDetails";
import './App.css'

function App() {
  const [validData, setValidData] = useState(null);       // store vehicle data
  const [showDetails, setShowDetails] = useState(false);  // control details page

  // अगर showDetails true है तो सिर्फ details page दिखेगा
  if (showDetails && validData) {
    return <VehicleDetails data={validData} />;
  }

  // otherwise default page
  return (
    <Vehicle_Container 
      onValid={(data) => setValidData(data)} 
      validData={validData}
      onShowDetails={() => setShowDetails(true)}
    />
  );
}

export default App;
