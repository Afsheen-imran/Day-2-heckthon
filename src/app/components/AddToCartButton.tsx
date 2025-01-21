"use client"
import Link from 'next/link';
import { useCart } from "./CartContext"

type Product = {
  _id: string
  name: string
  price: number
  imageUrl: string
  description: string
  category: string
  slug: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <Link href="/cart"> {/* Replace '/cart' with your desired path */}
  <button
    onClick={() => addToCart(product)} // addToCart function is triggered when the button is clicked
    className="mt-4 w-full bg-[#ff6b6b] text-white px-6 py-3 rounded-md hover:bg-[#ff4b4b] transition-colors"
  >
    Add to Cart
  </button>
</Link>
  )
}

