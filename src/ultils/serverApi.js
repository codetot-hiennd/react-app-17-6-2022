const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'

export const getData = async (typeData, start, limit) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/${typeData}?_start=${start}&_limit=${limit}`
    )
    if (response.status === 200) {
      const responseJson = await response.json()
      return { success: true, data: responseJson }
    } else {
      return { success: false, data: null }
    }
  } catch (error) {
    console.log(error)
    return { success: false, data: null }
  }
}
