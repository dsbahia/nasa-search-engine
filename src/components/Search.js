import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const images = await getImages(query);
    setSearchResults(images);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Enter keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
