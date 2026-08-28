import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'urban-bite-cart'

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = item => {
    setCart(current => {
      const existing = current.find(cartItem => cartItem.id === item.id)
      if (existing) {
        return current.map(cartItem => (
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ))
      }
      return [...current, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setCart(current => quantity > 0
      ? current.map(item => item.id === id ? { ...item, quantity } : item)
      : current.filter(item => item.id !== id)
    )
  }

  const removeFromCart = id => {
    setCart(current => current.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
