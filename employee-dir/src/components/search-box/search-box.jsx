import React from "react";

import "./search-box.css";

export const SearchBox = ({ handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder="Search"
    onChange={handleChange}
  />
);
