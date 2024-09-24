import { Link } from 'react-router-dom'
import cartEmpty from '/src/assets/cart-empty.svg'

const CartEmpty = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center py-16 dark:invert'>
      <img src={cartEmpty} alt='Cart empty Icon' />
      <h3 className='text-2xl text-center'>Your cart is currently empty.</h3>
      <Link
        to={'/'}
        className='hover:bg-black hover:text-white bg-white text-center text-black border border-black px-4 py-2'
      >
        Start shopping
      </Link>
    </div>
  )
}

export default CartEmpty
