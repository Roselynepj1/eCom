import { Link } from 'react-router-dom'
import Star from './Star'
import PropTypes from 'prop-types'
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className='hover:cursor-pointer'>
      <div className='w-full flex flex-col relative'>
        {product.price > product.discountedPrice && (
          <small className='absolute right-0 top-2 bg-black text-white p-1 '>
            -
            {Math.round(
              ((product.price - product.discountedPrice) / product.price) * 100
            )}
            %
          </small>
        )}

        <div className='h-80 w-full'>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className='border border-slate-400 hover:cursor-pointer h-full object-cover w-full'
          />
        </div>
        <div className='flex flex-col items-center gap-2 mt-4 dark:invert'>
          <small>{product.tags[0]}</small>
          <Link
            to={`/product/${product.id}`}
            className='hover:font-extrabold transition-colors'
          >
            {' '}
            {product.title}
          </Link>
          <span className='flex gap-2'>
            {product.price > product.discountedPrice && (
              <del>NOK {product.price}</del>
            )}
            <span className='text-bold'>NOK {product.discountedPrice}</span>
          </span>
          <Star rating={product.rating} />
        </div>
      </div>
    </Link>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}
export default Product
