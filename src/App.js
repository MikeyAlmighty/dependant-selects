import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [showRegion, setShowRegion] = useState(true);

  const handleCountryClick = e => {
    const { value } = e.target;
    console.log(value);
    return value === "ZAR"
      ? setShowRegion(!showRegion)
      : setShowRegion(showRegion);
  };
  return (
    <div>
      Country:
      <select id="country" onClick={e => handleCountryClick(e)}>
        <option value="none">Select...</option>
        <option value="ZAR">South Africa</option>
      </select>
      Region:
      <select id="region" disabled={showRegion}>
        <option value="none">Select...</option>
        <option value="Western District">Western District</option>
      </select>
    </div>
  );
}
