"use client" // Ensure client-side rendering in Next.js

import Link from "next/link"
import type { FC } from "react"
import { useCart } from "./CartContext"

type Product = {
  _id: string
  name: string
  price: number
  description: string
  slug: string
  imageUrl: string
  category: string
}

type ProductGridProps = {
  initialProducts: Product[]
}

const ProductGrid: FC<ProductGridProps> = ({ initialProducts }) => {
  const { addToCart } = useCart()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialProducts.map((product) => (
        <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href={`/products/${product.slug}`}>
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="p-4">
            <Link href={`/products/${product.slug}`}>
              <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 transition-colors">{product.name}</h3>
            </Link>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-[#ff6b6b] text-white px-4 py-2 rounded hover:bg-[#ff6b6b] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid



