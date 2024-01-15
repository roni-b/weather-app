import { useState, useEffect } from 'react'
import CountryInput from './components/CountryInput'
import Weather from './components/Weather'
import fetchData from './utils/fetchData'

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
      const data = await fetchData(`https://restcountries.com/v3.1/name/${countryInput}`)
      setCoordinates(data[0].latlng)
    } catch (error) {
      setCoordinates(null)
      handleErrors(error, setErrorMessage)
    }
  }

  return (
    <div className='w3-container'>
      <h3>Sääsovellus</h3>
      <p className='w3-text-red'>{errorMessage}</p>
      <CountryInput onSubmit={handleSubmit} />
      <Weather coordinates={coordinates} />
    </div>
  )
}

export default App
