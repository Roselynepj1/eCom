import PropTypes from 'prop-types'
import Star from './Star'

const ReviewItem = ({ review }) => {
  return (
    <div className='border rounded-lg p-4 mb-4'>
      <div className='flex items-start'>
        <div className='text-3xl text-gray-400 mr-4'>&apos;&apos;</div>
        <div className='flex-grow'>
          <div className='flex items-center mb-2'>
            <Star rating={review.rating} />
          </div>
          <h3 className='text-lg font-semibold mb-2'>{review.description}</h3>
          <p className='text-sm text-gray-600 mb-2'>{review.username}</p>
        </div>
      </div>
    </div>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object,
}
export default ReviewItem
