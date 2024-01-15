import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import fetchData from "../utils/fetchData"
import { openWeather } from "../utils/useApi"

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (coordinates) {
      const getWeather = async () => {
        const lat = coordinates[0]
        const lon = coordinates[1]
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeather}&units=metric`
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
    <div>
      {JSON.stringify(weatherData, null, 2)}
    </div>
  )
}

Weather.propTypes = {
  coordinates: PropTypes.array,
}

export default Weather