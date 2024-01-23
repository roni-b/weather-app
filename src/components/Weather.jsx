import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import fetchData from "../utils/fetchData"
// import { openWeather } from "../utils/useApi"

const Weather = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null)

  const styles = {
    weatherCard: {
      backgroundColor: '#f2f2f2',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      fontSize: '28px',
      marginBottom: '10px',
    },
    temperature: {
      display: 'flex',
      alignItems: 'center',
    },
    temperatureH1: {
      marginRight: '10px',
    },
    img: {
      marginLeft: '10px',
    },
    h3: {
      fontSize: '18px',
      marginTop: '5px',
    },
    p: {
      color: '#888',
      fontSize: '14px',
      marginTop: '10px',
    },
  }

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
    <div style={styles.weatherCard}>
      {weatherData ? (
        <>
        <h1 style={styles.h1}>{weatherData.name}</h1>
        <div style={styles.temperature}>
          <h1 style={styles.temperatureH1}>{weatherData.main.temp}</h1>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} width={80} alt={'weather icon'}></img>
        </div>
        <h3 style={styles.h3}>Tuntuu {weatherData.main.feels_like}</h3>
        <h3 style={styles.h3}>Tuuli {weatherData.wind.speed} m/s</h3>
        <p style={styles.p}>Säätiedot: OpenWeatherMap</p>
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