import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-container">
      <div className="image-grid">
        {results.map((image) => (
          <img
            key={image}
            src={image}
            alt="spaceImage"
            className="search-result-image"
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
