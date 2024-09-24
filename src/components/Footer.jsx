import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container align-center px-4 sm:px-4 lg:px-8 flex border-0 border-t-[0.1px] border-gray-300 py-4 w-full mx-auto flex-col sm:flex-row dark:invert'>
      <p className='text-black flex-grow'>
        &copy; {new Date().getFullYear()}. Made with 💙 By Roselyne P Johansen.
      </p>
      <ul className='flex gap-4  items-center'>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
