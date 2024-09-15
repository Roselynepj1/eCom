import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import QuantitySelector from '../components/QuantitySelector'
import { getProduct } from '../api/products'
import ReviewItem from '../components/ReviewItem'

const Product = () => {
  const params = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const { id } = params

    if (id) {
      getProduct(id)
        .then(({ data }) => {
          setProduct(data)
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  }, [params])

  if (loading) {
    return (
      <Layout>
        <div className='container mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 my-10'>
          <div className='rounded-lg bg-slate-500 h-80 w-full animate-pulse'></div>
          <div className='flex flex-col gap-4'>
            <div className='h-5 w-52 animate-pulse bg-slate-500'></div>
            <div className='h-5 w-52 animate-pulse bg-slate-500'></div>
            <div className='h-5 w-full animate-pulse bg-slate-500'></div>
            <div className='h-5 w-full animate-pulse bg-slate-500'></div>
            <div className='h-5 w-full animate-pulse bg-slate-500'></div>
            <div className='h-5 w-full animate-pulse bg-slate-500'></div>
            <div className='h-5 w-full animate-pulse bg-slate-500'></div>
            <div className='h-5 w-52 animate-pulse bg-slate-500'></div>
            <div className='h-5 w-52 animate-pulse bg-slate-500'></div>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className='container mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div className='h-80'>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className='h-full object-cover w-full'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl'>{product.title}</h2>
          <p className='flex gap-2'>
            {product.price > product.discountedPrice && (
              <del>{product.price}</del>
            )}
            <span>{product.discountedPrice}</span>
          </p>
          <p>{product.description}</p>
          <QuantitySelector product={product} />
          <div className='flex gap-2'>
            <span>Tags:</span>
            <span>{product.tags.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 gap-8 pt-12'>
        <h1 className='text-3xl'>Reviews ({product.reviews.length})</h1>
        <hr className='border border-1 ' />
        {product.reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </Layout>
  )
}

export default Product
