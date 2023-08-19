import React from "react";
import "../styles/searchResults.css";

const mockData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
];

const SearchResults = () => {
  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <div className="image-grid">
        {mockData.map(({ id, imageUrl }) => (
          <img key={id} src={imageUrl} alt="" className="search-result-image" />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
