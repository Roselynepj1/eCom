import Footer from './Footer'
import Header from './Header'
import PropTypes from 'prop-types' 

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen dark:bg-black transition-colors duration-200'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
