import cart from '/src/assets/cart.svg'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <Link to='/checkout' className='relative dark:invert'>
      <img src={cart} alt='Cart' height={26} width={26} />
      {cartItems.reduce((total, item) => total + item.quantity, 0) > 0 && (
        <span className='absolute -top-2 -right-2 bg-black text-white rounded-full  text-xs badge'>
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
