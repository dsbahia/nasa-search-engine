import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log('searchResults:', searchResults);
  return (
    <div className="app">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="Nasa Logo" />
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
}

export default App;
