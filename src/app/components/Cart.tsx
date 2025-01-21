"use client"

import type React from "react"
import { useState } from "react"
import { useCart } from "./CartContext"
import { PaymentMethod } from "./PaymentMethod"

const Cart: React.FC = () => {
  const { cart, removeFromCart, total } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  const toggleCart = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={toggleCart} className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg">
        🛒 ({cart.length})
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Your Cart</h3>
              <div className="mt-2 px-7 py-3">
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <ul>
                    {cart.map((item) => (
                      <li key={item._id} className="flex justify-between items-center mb-2">
                        <span>
                          {item.name} (x{item.quantity})
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item._id)} className="text-red-500">
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={() => setShowPayment(true)}
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Proceed to Payment
                </button>
                <button
                  onClick={toggleCart}
                  className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPayment && <PaymentMethod onClose={() => setShowPayment(false)} total={total} />}
    </>
  )
}

export default Cart

