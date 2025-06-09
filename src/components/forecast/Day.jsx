import React from "react";
import ReactDOM from "react-dom";
import './Day.css'
import PropTypes from 'prop-types';

function Day({day, weather,temp,icon}) {
  const temperatureClass = Math.ceil(temp) < 60 ? "cold" : "hot";
  return (
    // JSX code for rendering the component
    <div className="Day">
         <h3 className="day">{day}</h3>
         <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather} />
         <p className="weather">{weather}</p>
         <p className={`temperature${temperatureClass}`}>Temp: {temp}</p>
    </div>
  );
}

Day.propTypes = {
    day: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,

};

export default Day;
