import React from "react";
import ReactDOM from "react-dom";
import './Forecast.css'
import Day from "./Day.jsx";
import {parseForecastData} from "./../../utils/utils.js";
import PropTypes from 'prop-types';



function Forecast({data}) {
  const preparedData = parseForecastData(data.list);
  let num = 0
  return (
    // JSX code for rendering the component
    <div className="Forecast">
      <h3>Forecast</h3>
      <div id="days">
      {preparedData.map(obj => (
          <Day key={num++} day={obj.date} weather={obj.weather} temp={obj.temperature} icon={obj.icon}/>
      ))}
      </div>
    </div>
  );
}

Forecast.propTypes = {
    data: PropTypes.array.isRequired,
};


export default Forecast;
