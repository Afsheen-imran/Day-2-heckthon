


import { client } from "../../../sanity/lib/client"
import { CartProvider } from "../../components/CartContext"
import dynamic from "next/dynamic"
import AddToCartButton from "@/app/components/AddToCartButton"

const Cart = dynamic(() => import("../../components/Cart"), {
  ssr: false,
})

type Product = {
  _id: string
  name: string
  price: number
  description: string
  slug: string
  imageUrl: string
  category: string
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch<Product>(
      `
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        price,
        description,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        category
      }
    `,
      { slug },
    )
    return product
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-96 w-full object-cover md:w-96"
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</div>
                <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <div className="mt-8">
                  <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Cart />
      </div>
    </CartProvider>
  )
}

