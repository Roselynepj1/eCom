import { useState } from 'react'

import logo from '/src/assets/logo.png'
import bars from '/src/assets/bars.svg'
import CartIcon from './CartIcon'
import { Link } from 'react-router-dom'

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <>
      <div
        className={`fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black opacity-90 z-50 ${
          openMobileMenu ? '' : 'hidden'
        }`}
      >
        <div className='container mx-auto px-4 pt-6'>
          <button
            onClick={() => setOpenMobileMenu(false)}
            className='absolute top-4 right-4 text-white'
          >
            X
          </button>
          <ul className='flex flex-col items-center gap-4 text-white'>
            <li>
              <Link to='/home' className='hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className=' container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 backdrop-blur-lg'>
        <div className='mx-auto py-4'>
          <ul className='flex gap-4 items-center'>
            <li className='flex sm:hidden'>
              <img src={bars} alt='Logo' height={26} width={26} onClick={() => setOpenMobileMenu(true)}/>
            </li>
            <li className='flex flex-grow justify-center sm:justify-start'>
              <Link to='/home'>
                <img src={logo} alt='Logo' height={200} width={200} />
              </Link>
            </li>
            <li className='ml-auto hidden sm:flex '>
              <Link to='/home' className='hover:underline text-lg'>
                Home
              </Link>
            </li>

            <li className='hidden sm:flex '>
              <Link to='/contact' className='hover:underline text-lg'>
                Contact
              </Link>
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
