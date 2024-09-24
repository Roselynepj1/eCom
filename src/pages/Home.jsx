import { useState, useEffect } from 'react'
import { getProducts } from '../api/products'
import Layout from '../components/Layout'
import Product from '../components/Product'
import SearchIcon from '/src/assets/search.svg'

const Home = () => {
  const [products, setProducts] = useState([]) // Ensure products is initialized as an array
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) // State for handling errors
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts()
        if (Array.isArray(data)) {
          setProducts(data)
          setFilteredProducts(data)
        } else {
          console.error('Unexpected data format:', data)
          setError('Failed to load products')
        }
      } catch (error) {
        console.error('Error fetching products:', error.message)
        setError('Error fetching products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filtering products based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }
  }, [searchQuery, products])

  return (
    <Layout>
      <div className='flex justify-center relative landing-page '>
        <div className='container mx-auto px-4 sm:p-6 lg:p-8 flex flex-col justify-center'>
          <h1 className='text-3xl sm:text-4xl mb-10'>
            <span className='w-full sm:w-4/5 flex text-white text-bold leading-relaxed'>
              Whether you&apos;re a trendsetter, a bargain hunter, or just
              someone who appreciates a good deal, you&apos;ve found your
              digital haven. Here&apos;s what awaits you
            </span>
          </h1>
          <a
            href='#products'
            className='text-black border  p-4 border-black hover:text-white hover:bg-black self-start'
          >
            Discover Products
          </a>
        </div>
      </div>

      <div
        className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'
        id='products'
      >
        <h1 className='text-center text-3xl sm:text-5xl mb-16 dark:text-white'>
          Browse our catalog
        </h1>
        {/* Search Input */}
        <div className='my-8 relative'>
          <input
            type='text'
            placeholder='Search products by name'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full p-2 pr-10 border border-gray-300 rounded-md dark:text-gray-300 dark:bg-transparent'
          />
          <img
            src={SearchIcon}
            alt='Search Icon'
            width={20}
            height={20}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none dark:invert'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Home
