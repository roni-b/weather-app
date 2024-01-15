import { useState } from "react"
import PropTypes from 'prop-types'

const LocationInput = ({ onSubmit }) => {
  const [locationInput, setLocationInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(locationInput)
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Syötä kaupunki:
        <input
          type='text'
          name='countryInputField'
          value={locationInput || ''}
          onChange={(e) => setLocationInput(e.target.value)}
        />
      </label>
      <button type='submit'>Hae sää</button>
    </form>
  )
}

LocationInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default LocationInput