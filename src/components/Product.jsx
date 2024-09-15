import { Link } from 'react-router-dom'
import Star from './Star'
import PropTypes from 'prop-types'
const Product = ({ product }) => {
  return (
    <div className='w-full flex flex-col'>
      <div className='h-80 w-full'>
        <img
          src={product.image.url}
          alt={product.image.alt}
          className='border border-slate-400 hover:cursor-pointer h-full object-cover w-full'
        />
      </div>
      <div className='flex flex-col items-center gap-2 mt-4'>
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
            <del>{product.price}</del>
          )}
          <span className='text-bold'>{product.discountedPrice}</span>
        </span>
        <Star rating={product.rating} />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}
export default Product
