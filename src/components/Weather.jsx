import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import fetchData from "../utils/fetchData"

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (coordinates) {
      const getWeather = async () => {
        const apiKey = import.meta.env.VITE_WEATHER_API
        const lat = coordinates[0]
        const lon = coordinates[1]
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        try {
          const data = await fetchData(url)
          setWeatherData(data)
          console.log(weatherData)
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
    <div>
      {JSON.stringify(weatherData, null, 2)}
    </div>
  )
}

Weather.propTypes = {
  coordinates: PropTypes.array,
}

export default Weather