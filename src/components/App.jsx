import { useState,useEffect } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './forecast/Forecast'
import Data from './../data/data.js'

function App() {
  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [city, setCity] = useState("");

  const saveCity = (newData) => {
    setCity(newData.target.value);
  }

  const [weatherData, setWeatherData] = useState(null);
  function search(){
    event.preventDefault(); // Prevents the default form submission
    console.log("Searching for:", city);
    fetchData()
  }


  return (
    <>
      <div className='App'>
        <header>
          <h1>Weather Report</h1>
        </header>
        <SearchForm city={city} cityChange = {saveCity} search={search}/>
        <Forecast data={weatherData} />
      </div>
    </>
  )
}

export default App
