export default class LocalStorage {
  static getCart() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  }

  static setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  static addProductToCart(product, quantity = 1) {
    const cart = LocalStorage.getCart()
    const existingProduct = cart.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += quantity
    } else {
      product.quantity = quantity
      cart.push(product)
    }
    LocalStorage.setCart(cart)
  }

  static getAllProductsFromCart() {
    return LocalStorage.getCart()
  }

  static getProductFromCartById(id) {
    return LocalStorage.getCart().find((item) => item.id === id)
  }

  static deleteProductFromCart(id) {
    const cart = LocalStorage.getCart().filter((item) => item.id !== id)
    LocalStorage.setCart(cart)
  }
  static getTotalItems() {
    return LocalStorage.getCart().reduce(
      (total, item) => total + item.quantity,
      0
    )
  }
}
