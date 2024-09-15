import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'
import LocalStorage from '../data/LocalStorage'

// Create the Cart Context
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  // Initialize cart state from local storage
  const [cartItems, setCartItems] = useState(LocalStorage.getCart())

  // Sync cart state with local storage whenever cartItems changes
  useEffect(() => {
    LocalStorage.setCart(cartItems)
  }, [cartItems])

  // Function to add an item to the cart
  const addToCart = (product, quantity = 1) => {
    const updatedCart = [...cartItems] // Copy the current cart state
    const existingProduct = updatedCart.find((item) => item.id === product.id)

    if (existingProduct) {
      existingProduct.quantity += quantity
    } else {
      updatedCart.push({ ...product, quantity })
    }

    setCartItems(updatedCart) // Update cart state
  }

  // Decrease item quantity in cart
  const decreaseItemQuantity = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId)

    if (!existingItem) return

    let updatedCart
    if (existingItem.quantity === 1) {
      updatedCart = cartItems.filter((item) => item.id !== productId)
    } else {
      updatedCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    }

    setCartItems(updatedCart)
    LocalStorage.setCart(updatedCart)
  }

  // Remove item from cart
  const removeItemFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCart)
    LocalStorage.setCart(updatedCart)
  }

  const clearCart = () => {
    setCartItems([])
    LocalStorage.setCart([])
  }

  // Provide context value with cart state and actions
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseItemQuantity, removeItemFromCart,clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
