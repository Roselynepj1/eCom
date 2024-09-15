import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='text-center'>
        {/* Sad face icon or emoji */}
        <div className='text-9xl mb-4'>😔</div>

        {/* 404 status */}
        <h1 className='text-6xl font-bold mb-4 text-gray-800'>404</h1>

        {/* Page Not Found text */}
        <h2 className='text-2xl font-semibold mb-2'>Page not found</h2>

        {/* Additional message */}
        <p className='text-lg text-gray-600 mb-8'>
          The page you are looking for doesn’t exist or an error occurred.
          <br />
          Go back, or head over to our homepage to choose a new direction.
        </p>

        {/* Button to go back to homepage */}
        <Link
          to='/home'
          className='hover:bg-black hover:text-white bg-white text-black border border-black px-4 py-2'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
