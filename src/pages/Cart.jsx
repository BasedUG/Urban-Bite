import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart()
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-light py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-dark">Your Order</h1>
          {cart.length > 0 && (
            <button onClick={clearCart} className="text-sm font-semibold text-gray-500 hover:text-primary">
              Clear order
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="card p-12 text-center">
            <p className="text-xl text-gray-600 mb-6">Your order is empty.</p>
            <Link to="/menu" className="btn-primary inline-block">Browse the menu</Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="card p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <h2 className="font-bold text-dark">{item.name}</h2>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:border-primary">
                      <FaMinus className="text-xs" />
                    </button>
                    <span className="w-5 text-center font-semibold">{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:border-primary">
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                  <span className="w-20 text-right font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <aside className="card p-6 h-fit">
              <h2 className="text-xl font-bold text-dark mb-5">Summary</h2>
              <div className="flex justify-between text-gray-600 mb-3"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-600 mb-5"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold text-dark"><span>Total</span><span>${total.toFixed(2)}</span></div>
              <button className="btn-primary w-full mt-6" onClick={() => alert('Thanks! Your order has been received.')}>Place order</button>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
