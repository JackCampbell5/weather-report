import React from "react";
import ReactDOM from "react-dom";
import './SearchForm.css'


function SearchForm({city,search,cityChange}) {

  return (
    // JSX code for rendering the component
    <div className="search-form">
      <form onSubmit={search}>
        <input id="search-box" name="dataInput" value={city} onChange={cityChange} placeholder="City, State Name"/>
        <button type="submit" id="search-button">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
