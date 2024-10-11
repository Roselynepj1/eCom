import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Layout from '../components/Layout'
import CartEmpty from '../components/CartEmpty'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const {
    cartItems,
    addToCart,
    decreaseItemQuantity,
    removeItemFromCart,
    clearCart,
  } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    clearCart()
    navigate('/checkout-success')
  }

  // Calculate subtotal for each item
  const getItemSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2)
  }

  return (
    <Layout>
      <div className='container mx-auto mt-10'>
        <div className='flex shadow-md my-10'>
          <div className='w-full px-10 py-10'>
            <div className='flex justify-between border-b pb-8'>
              <h1 className='text-black text-2xl dark:text-white'>
                Shopping Cart
              </h1>
              <h2 className='text-black text-2xl dark:text-white'>
                {cartItems.length} Items
              </h2>
            </div>
            <div className='flex mt-10 mb-5'>
              <h3 className='text-black dark:text-white  text-xs uppercase  w-11/12 sm:w-2/5'>
                Product
              </h3>
              <h3 className='text-black dark:text-white text-center  text-xs uppercase w-full sm:w-1/5'>
                Unit Price
              </h3>
              <h3 className='text-black dark:text-white text-center  text-xs uppercase w-1/5  hidden sm:flex'>
                Quantity
              </h3>
              <h3 className='text-black dark:text-white text-center  text-xs uppercase w-1/5  hidden sm:flex'>
                Subtotal
              </h3>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className='flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 -mx-8 px-6 py-5'
              >
                <div className='flex w-11/12 sm:w-2/5'>
                  {/* Product Image */}
                  <div className='w-20'>
                    <img
                      className='h-24'
                      src={item.image.url}
                      alt={item.image.alt}
                    />
                  </div>
                  <div className='flex flex-col gap-4 ml-4 flex-grow'>
                    <span className='font-bold text-sm dark:text-white'>
                      {item.title}
                    </span>
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className='text-red-700 hover:text-red-500 text-xs self-start'
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className='w-full sm:w-1/5 flex flex-col justify-center items-center gap-4'>
                  <span className='dark:text-white'>NOK {item.price}</span>
                  <div className='w-1/5 flex justify-center sm:hidden'>
                    <button
                      onClick={() => decreaseItemQuantity(item.id)}
                      className='bg-gray-300 px-2 rounded-l'
                    >
                      -
                    </button>
                    <input
                      className='border text-center w-8'
                      type='text'
                      readOnly
                      value={item.quantity}
                    />
                    <button
                      onClick={() => addToCart(item, 1)}
                      className='bg-gray-300 px-2 rounded-r'
                    >
                      +
                    </button>
                  </div>
                  <span className='sm:hidden'>NOK {getItemSubtotal(item)}</span>
                </div>
                <div className='w-1/5 justify-center hidden sm:flex'>
                  <button
                    onClick={() => decreaseItemQuantity(item.id)}
                    className='bg-gray-300 px-2 rounded-l'
                  >
                    -
                  </button>
                  <input
                    className='border text-center w-8'
                    type='text'
                    readOnly
                    value={item.quantity}
                  />
                  <button
                    onClick={() => addToCart(item, 1)}
                    className='bg-gray-300 px-2 rounded-r'
                  >
                    +
                  </button>
                </div>
                <div className='w-1/5 text-center  hidden sm:flex dark:text-white'>
                  NOK {getItemSubtotal(item)}
                </div>
              </div>
            ))}

            {cartItems.length ? (
              <div className='flex mt-10'>
                <button
                  onClick={handleCheckout}
                  className='hover:bg-black hover:text-white bg-white text-black dark:border-slate-100 border border-black px-4 py-2'
                >
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <CartEmpty />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
