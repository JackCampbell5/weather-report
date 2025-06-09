import { useState } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './forecast/Forecast'
import Data from './../data/data.js'

function App() {
  return (
    <>
      <div className='App'>
        <header>
          <h1>Weather Report</h1>
        </header>
        <SearchForm />
        <Forecast data={Data} />
      </div>
    </>
  )
}

export default App
