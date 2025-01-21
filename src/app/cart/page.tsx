"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lip Tint",
      price: 199.99,
      quantity: 1,
      image: "/images/abc.jpeg",
    },
    {
      id: 2,
      name: "Green Mask Stick",
      price: 299.99,
      quantity: 1,
      image: "/images/bea.jpeg",
    },
  ])

  const [subtotal, setSubtotal] = useState(0)
  const [shipping] = useState(9.99)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setSubtotal(newSubtotal)
    setTotal(newSubtotal + shipping)
  }, [cartItems, shipping])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link href="/products" className="back-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Continue Shopping
        </Link>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={200}
                height={200}
                className="item-image "
              />
              <div className="item-details">
                <h3 className="m-3 text-2xl font-bold">{item.name}</h3>
                <p className="m-3">Quantity: {item.quantity}</p>
                <p className="item-price m-3">${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>

      <style jsx>{`
        .cart-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
        }
        .cart-header {
          margin-bottom: 2rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          color: #666;
          text-decoration: none;
          margin-bottom: 1rem;
        }
        .back-link svg {
          margin-right: 0.5rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .cart-content {
          display: flex;
          flex-direction: column;
        }
        .cart-items {
          flex: 2;
          margin-right: 2rem;
        }
        .cart-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .item-image {
          border-radius: 8px;
          margin-right: 1rem;
        }
        .item-details {
          flex: 1;
        }
        .item-price {
          font-weight: bold;
          color: #ff6b6b;
        }
        .remove-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
        }
        .order-summary {
          flex: 1;
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
        }
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .total {
          font-weight: bold;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e0e0e0;
        }
        .checkout-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .checkout-button:hover {
          background-color: #ff5252;
        }
        @media (min-width: 768px) {
          .cart-content {
            flex-direction: row;
          }
        }
        @media (prefers-color-scheme: dark) {
          .cart-page {
            background-color: #1a1a1a;
            color: #fff;
          }
          .back-link {
            color: #ccc;
          }
          .cart-item {
            border-color: #333;
          }
          .order-summary {
            background-color: #2a2a2a;
          }
          .remove-button {
            color: #ccc;
          }
          .checkout-button {
            background-color: #ff5252;
          }
          .checkout-button:hover {
            background-color: #ff3939;
          }
        }
      `}</style>
    </div>
  )
}

