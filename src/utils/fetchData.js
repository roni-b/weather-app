const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  if (response.ok) {
    return response.json()
  } else {
    const errorData = await response.json()
    throw new Error(errorData.message || response.statusText)
  }
}

export default fetchData