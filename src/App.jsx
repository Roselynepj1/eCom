import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import CheckoutSuccess from "./pages/CheckoutSuccess"

function App() { 

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/checkout-success" element={<CheckoutSuccess />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
