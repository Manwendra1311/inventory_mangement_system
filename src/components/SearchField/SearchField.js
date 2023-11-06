import React from "react";
import styles from "./SearchFiled.module.css";

import SearchIcon from "../../assets/SearchField/search_icon.png";

const SearchField = ({ searchText, onSearch, extraStyle }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className={styles.search_field + " " + extraStyle}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <div className={styles.search_icon}>
        <img src={SearchIcon} alt="SearchIcon"></img>
      </div>
    </div>
  );
};

export default SearchField;
