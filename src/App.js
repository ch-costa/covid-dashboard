import React from "react";

import WorldStats from "./components/WorldStats";
import CountriesStats from "./components/CountriesStats";

import "./global.css";

function App() {
  return (
    <div>
      <WorldStats />
      <CountriesStats />
    </div>
  );
}

export default App;
