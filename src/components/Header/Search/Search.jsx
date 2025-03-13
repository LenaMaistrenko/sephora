import React from "react";
import "./Search.css";

export function Search() {
  return (
    <div className="search-container">
        <img src="img/search-icon.svg" alt="Search" className="search-icon" />
        <input type="search" placeholder="Search" />
    </div>
  );
}
