import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../Styles/Searchbar.css";

export default function SearchBar() {
  const [focused, setFocused] = useState(false);

  const recentSearches = ["AI", "Web Dev", "Programming"];

  return (
    <div className="search-container">
      <div className={`search-input-wrapper ${focused ? "focused" : ""}`}>
        <IoSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for anything"
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
      </div>

      {focused && (
        <div className="search-dropdown">
          {recentSearches.map((item, index) => (
            <div key={index} className="search-item">
              <span className="search-text">{item}</span>
              <span className="remove-icon">x</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
