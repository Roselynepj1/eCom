import { useState } from 'react' 
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from '../context/CartContext'

const QuantitySelector = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className='flex items-center space-x-2'>
      <div className='flex items-center border border-gray-300 h-full'>
        <button
          onClick={decreaseQuantity}
          className='px-3 py-1 text-gray-600 hover:bg-gray-100'
        >
          -
        </button>
        <span className='px-3 py-1 text-gray-700'>{quantity}</span>
        <button
          onClick={increaseQuantity}
          className='px-3 py-1 text-gray-600 hover:bg-gray-100'
        >
          +
        </button>
      </div>
      <button
        className='px-4 py-2 text-white bg-gray-800 hover:bg-gray-700'
        onClick={() => addToCart(product, quantity)}
      >
        Add to cart
      </button>
    </div>
  )
}

QuantitySelector.propTypes = {
  product: PropTypes.object,
}
export default QuantitySelector
