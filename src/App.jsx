import { useState } from 'react'
import LocationInput from './components/LocationInput'
import Weather from './components/Weather'
import fetchData from './utils/fetchData'
// import { openWeather } from './utils/useApi'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [coordinates, setCoordinates] = useState(null)

  const handleErrors = (error, setErrorMessage, timeout = 5000) => {
    setErrorMessage(error.message)
    setTimeout(() => {
      setErrorMessage(null)
    }, timeout)
  }

  const handleSubmit = async (countryInput) => {
    try {
      const api = process.env.WEATHER_API
      const data = await fetchData(`https://api.openweathermap.org/geo/1.0/direct?q=${countryInput}&appid=${api}`)
      setCoordinates([data[0].lat, data[0].lon])
    } catch (error) {
      setCoordinates(null)
      handleErrors(error, setErrorMessage)
    }
  }

  return (
    <div className='w3-container'>
      <h3>Sääsovellus</h3>
      <p className='w3-text-red'>{errorMessage}</p>
      <LocationInput onSubmit={handleSubmit} />
      <Weather coordinates={coordinates} />
    </div>
  )
}

export default App
