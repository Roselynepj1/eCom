import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const CheckoutSuccess = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-screen text-center dark:invert'>
        <div className='bg-white p-6 rounded-md flex flex-col gap-4'>
          <div className='rounded-full border-2 border-green-500 w-20 h-20 self-center'>
            <div className='text-green-500 mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-16 w-16 mx-auto'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2l4-4'
                />
              </svg>
            </div>
          </div>
          <p className='text-xl font-medium'>
            Your transaction has been completed successfully.
          </p>
          <p className='text-gray-500 mt-2'>
            We have emailed you details of your order.
          </p>
          <Link
            to={'/'}
            className='hover:bg-black hover:text-white bg-white text-black border border-black px-4 py-2'
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutSuccess
