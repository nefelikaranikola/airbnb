import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_search_button"
        >
          Search dates
        </button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <button type="submit">Explore nearby</button>
      </div>
    </div>
  );
}

export default Banner;
