import React, { useState } from "react";
import "./Filters.css";

const FILTER_CATEGORIES = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const sampleOptions = ["All"];

const Filters = ({ filters, setFilters }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <aside className="filters-wrapper">
      <div className="filters-header">
        <span className="total-items">{filters.totalItems} ITEMS</span>
        <button
          className="hide-filter-btn"
          onClick={() => setFilters((prev) => ({ ...prev, hideFilter: true }))}
        >
          HIDE FILTER
        </button>
      </div>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={filters.customizable}
          onChange={() =>
            setFilters((prev) => ({ ...prev, customizable: !prev.customizable }))
          }
        />
        CUSTOMIZABLE
      </label>

      <div className="filter-categories">
        {FILTER_CATEGORIES.map((category) => (
          <div key={category} className="filter-category">
            <button
              className="category-header"
              onClick={() => toggleCategory(category)}
              aria-expanded={!!openCategories[category]}
            >
              {category}
              <span className="arrow">{openCategories[category] ? "▲" : "▼"}</span>
            </button>
            {openCategories[category] && (
              <ul className="filter-options">
                {sampleOptions.map((opt) => (
                  <li key={opt}>
                    <label>
                      <input type="checkbox" disabled /> {opt}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Filters;