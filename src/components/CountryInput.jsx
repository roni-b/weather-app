import { useState } from "react"
import PropTypes from 'prop-types'

const CountryInput = ({ onSubmit }) => {
  const [countryInput, setCountryInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(countryInput)
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Syötä maa:
        <input
          type='text'
          name='countryInputField'
          value={countryInput || ''}
          onChange={(e) => setCountryInput(e.target.value)}
        />
      </label>
      <button type='submit'>Hae sää</button>
    </form>
  )
}

CountryInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default CountryInput