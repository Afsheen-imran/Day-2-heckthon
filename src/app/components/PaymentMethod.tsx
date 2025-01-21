"use client"

import type React from "react"
import { useState } from "react"
import { useCart } from "./CartContext"

type PaymentMethodProps = {
  onClose: () => void
  total: number
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ onClose, total }) => {
  const [paymentMethod, setPaymentMethod] = useState("")
  const { clearCart } = useCart()

  const handlePayment = () => {
    // Here you would typically integrate with a payment gateway
    alert(`Processing payment of $${total.toFixed(2)} via ${paymentMethod}`)
    clearCart()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Payment Method</h3>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              value="credit_card"
              checked={paymentMethod === "credit_card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            PayPal
          </label>
        </div>
        <button
          onClick={handlePayment}
          disabled={!paymentMethod}
          className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-300"
        >
          Pay ${total.toFixed(2)}
        </button>
        <button
          onClick={onClose}
          className="mt-3 px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

