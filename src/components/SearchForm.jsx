import React from "react";
import ReactDOM from "react-dom";
import './SearchForm.css'


function SearchForm() {
  return (
    // JSX code for rendering the component
    <div className="search-form">
    <input id="search-box" placeholder="City, State Name"/>
    <button className="button" id="search-button">Submit</button>
    </div>
  );
}

export default SearchForm;
