import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import fetchData from "../utils/fetchData"
// import { openWeather } from "../utils/useApi"
import './WeatherCard.css';

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (coordinates) {
      const getWeather = async () => {
        const lat = coordinates[0]
        const lon = coordinates[1]
        const api = process.env.WEATHER_API
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
        try {
          const data = await fetchData(url)
          setWeatherData(data)
        } catch (error) {
          console.log(error)
        }
      }
      getWeather()
    }
  }, [coordinates])

  if (!coordinates) {
    return null
  }

  return (
    <div className="weather-card">
      {weatherData ? (
        <>
        <h1>{weatherData.name}</h1>
        <div className="temperature">
          <h1>{weatherData.main.temp}</h1>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} width={80} alt={'weather icon'}></img>
        </div>
        <h3>Tuntuu {weatherData.main.feels_like}</h3>
        <h3>Tuuli {weatherData.wind.speed} m/s</h3>
        <p>Säätiedot: OpenWeatherMap</p>
        </>
      ) : (
        <p>Ladataan säätietoja...</p>
      )}
    </div>
  )
}

Weather.propTypes = {
  coordinates: PropTypes.array,
}

export default Weather