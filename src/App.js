import React, { useState, useEffect } from "react";

import api from "./services/api";
import WorldStats from "./components/WorldStats";
import CountriesStats from "./components/CountriesStats";

import "./global.css";

function App() {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    async function fetchData() {
      await api.get("/countries").then((res) => {
        setCountry(res.data.countries);
      });
    }
    fetchData();
  }, []);

  const onChangeCountry = (evt) => {
    setSelectedCountry(evt.target.value);
  };
  return (
    <div>
      <WorldStats />
      <select
        name="country-select"
        onChange={onChangeCountry}
        value={selectedCountry}
      >
        {country &&
          country.map((data) => (
            <option key={data.name} value={data.iso3}>
              {data.name}
            </option>
          ))}
      </select>
      <CountriesStats iso3={selectedCountry} />
    </div>
  );
}

export default App;
