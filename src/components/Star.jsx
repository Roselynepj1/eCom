import PropTypes from 'prop-types'

const Star = ({ rating }) => {
  // Validate rating
  const validRating = Math.max(0, Math.min(5, rating))

  // Calculate the number of full and partial stars
  const fullStars = Math.floor(validRating)
  const hasHalfStar = validRating % 1 !== 0

  return (
    <div className='flex items-center '>
      {Array.from({ length: 5 }, (_, index) => {
        if (index < fullStars) {
          // Full star
          return (
            <svg
              key={index}
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-black'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M12 2.25l3.071 6.217 6.876.997-4.97 4.843 1.175 6.85L12 17.74l-6.152 3.235 1.175-6.85-4.97-4.843 6.876-.997L12 2.25z' />
            </svg>
          )
        } else if (index === fullStars && hasHalfStar) {
          // Half star (filled left side, empty right side)
          return (
            <div key={index} className='relative'>
              {/* Empty star */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-300 absolute'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 2.25l3.071 6.217 6.876.997-4.97 4.843 1.175 6.85L12 17.74l-6.152 3.235 1.175-6.85-4.97-4.843 6.876-.997L12 2.25z' />
              </svg>
              {/* Half-filled star */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-black'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              >
                <path d='M12 2.25l3.071 6.217 6.876.997-4.97 4.843 1.175 6.85L12 17.74l-6.152 3.235 1.175-6.85-4.97-4.843 6.876-.997L12 2.25z' />
              </svg>
            </div>
          )
        } else {
          // Empty star
          return (
            <svg
              key={index}
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M12 2.25l3.071 6.217 6.876.997-4.97 4.843 1.175 6.85L12 17.74l-6.152 3.235 1.175-6.85-4.97-4.843 6.876-.997L12 2.25z' />
            </svg>
          )
        }
      })}
    </div>
  )
}

Star.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Star
