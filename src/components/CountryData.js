import React from "react";
import { flag } from "country-emoji";
import { formatNumber } from "../utils/formats";
import useGet from "../utils/useGet";

import "./CountryData.css";

function CountryData({ country }) {
  const { name, iso2, iso3 } = country;
  const { stats } = useGet("/countries/" + iso3);

  return (
    <>
      {stats && stats.data.confirmed.value > 0 && (
        <li key={iso3} className="country-card">
          <div className="aside">
            <span>{flag(iso2)}</span>
            <strong>{iso3}</strong>
          </div>
          <div className="country-details">
            <div className="name">
              <span>{name}</span>
            </div>
            <div className="item">
              <strong>Confirmados</strong>
              <span>{stats && formatNumber(stats.data.confirmed.value)}</span>

              <strong>Recuperados</strong>
              <span>{stats && formatNumber(stats.data.recovered.value)}</span>

              <strong>Mortos</strong>
              <span>{stats && formatNumber(stats.data.deaths.value)}</span>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default CountryData;
