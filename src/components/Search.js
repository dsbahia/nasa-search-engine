import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Enter keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
