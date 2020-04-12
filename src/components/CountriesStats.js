import React from "react";
import useGet from "../utils/useGet";

import "./CountriesStats.css";
import CountryData from "./CountryData";

function CountriesStats({ iso3 }) {
  const { stats, loading, error } = useGet("/countries/");

  return (
    <div className="countries-content">
      {error ? (
        <div className="alert alert-danger m-5" role="alert">
          Ops! Algo deu Errado...
        </div>
      ) : loading ? (
        <div className="spinner-border text-secondary m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <ul>
          {stats.data.countries &&
            stats.data.countries.map((data) => (
              <CountryData key={data.name} country={data} />
            ))}
        </ul>
      )}
    </div>
  );
}

export default CountriesStats;
