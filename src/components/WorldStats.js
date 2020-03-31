import React from "react";
import useGet from "../utils/useGet";
import { formatNumber, formatDate } from "../utils/formats";

import "./WorldStats.css";

function WorldStats() {
  const { stats, loading, error } = useGet("/");

  return (
    <div>
      <div className="top-bar">
        <strong>Status Mundial Covid-19</strong>
      </div>
      <div className="world-header">
        {error ? (
          <div class="alert alert-danger m-5" role="alert">
            Ops! Algo deu Errado...
          </div>
        ) : loading ? (
          <div className="spinner-border text-secondary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <ul>
            <li className="stats-item">
              <div className="stats-data">
                <strong>Confirmados</strong>
                <span>
                  {stats.data.confirmed.value &&
                    formatNumber(stats.data.confirmed.value)}
                </span>
              </div>
            </li>
            <li className="stats-item">
              <div className="stats-data">
                <strong>Recuperados</strong>
                <span>
                  {stats.data.recovered.value &&
                    formatNumber(stats.data.recovered.value)}
                </span>
              </div>
            </li>
            <li className="stats-item">
              <div className="stats-data">
                <strong>Mortos</strong>
                <span>
                  {stats.data.deaths.value &&
                    formatNumber(stats.data.deaths.value)}
                </span>
              </div>
            </li>
            <div className="updated">
              <span>
                Atualizado em:{" "}
                {stats.data.lastUpdate && formatDate(stats.data.lastUpdate)}
              </span>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default WorldStats;
