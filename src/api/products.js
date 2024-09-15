import { API_BASE } from './contants'

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error.message)
    throw error
  }
}

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error.message)
    throw error
  }
}


