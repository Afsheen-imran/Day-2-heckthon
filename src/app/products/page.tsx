// import { Suspense } from "react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ProductGrid } from "@/components/ProductGrid";
// import { ProductHeader } from "@/components/ProductHeader";
// import { CategoryFilterWrapper } from "@/components/CategoryFilterWrapper";
// import { client } from "@/sanity/lib/client";

// // Define a type for the product to ensure typed responses from the fetch function
// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   slug: string;
//   imageUrl: string;
//   category: string;
// };

// // Fetch products from Sanity
// async function getProducts(): Promise<Product[]> {
//   try {
//     const products = await client.fetch<Product[]>(`
//       *[_type == "product"] {
//         _id,
//         name,
//         price,
//         description,
//         "slug": slug.current,
//         "imageUrl": image.asset->url,
//         category
//       }
//     `);
//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

// // Skeleton Loader for Product Grid
// function ProductGridSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"
//         />
//       ))}
//     </div>
//   );
// }

// export default async function Home() {
//   const products = await getProducts();
//   const categories = Array.from(new Set(products.map((p: Product) => p.category)));

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
//       {/* Header */}
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {/* Page Title */}
//         <ProductHeader />
//         <div className="flex flex-col lg:flex-row gap-8 mt-8">
//           {/* Category Filter */}
//           <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">Filter by Category</h3>
//             <Suspense fallback={<div className="animate-pulse h-64 bg-gray-200 rounded-lg" />}>
//               <CategoryFilterWrapper categories={categories} />
//             </Suspense>
//           </aside>

//           {/* Product Grid */}
//           <div className="w-full lg:w-3/4">
//             <h3 className="text-2xl font-bold mb-6 text-gray-800">Available Products</h3>
//             <Suspense fallback={<ProductGridSkeleton />}>
//               <ProductGrid initialProducts={products} />
//             </Suspense>
//           </div>
//         </div>
//       </main>
     
//     </div>
//   );
// }

import { Suspense } from "react"
import { ProductHeader } from "../../components/ProductHeader"
import { CategoryFilterWrapper } from "../../components/CategoryFilterWrapper"
import { client } from "../../sanity/lib/client"
import dynamic from "next/dynamic"

// Import the CartProvider with correct path
import { CartProvider } from "../components/CartContext"

// Dynamically import client components with correct paths
const ProductGrid = dynamic(() => import("../components/ProductGrid"), {
  loading: () => <ProductGridSkeleton />,
  ssr: false,
})

const Cart = dynamic(() => import("../components/Cart"), {
  ssr: false,
})

// Rest of the types and functions remain the same
type Product = {
  _id: string
  name: string
  price: number
  description: string
  slug: string
  imageUrl: string
  category: string
}

async function getProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch<Product[]>(`
      *[_type == "product"] {
        _id,
        name,
        price,
        description,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        category
      }
    `)
    return products
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
      ))}
    </div>
  )
}

export default async function ProductPage() {
  const products = await getProducts()
  const categories = Array.from(new Set(products.map((p: Product) => p.category)))

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
        <main className="flex-grow container mx-auto px-4 py-8">
          <ProductHeader />
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <aside className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Filter by Category</h3>
              <Suspense fallback={<div className="animate-pulse h-64 bg-gray-200 rounded-lg" />}>
                <CategoryFilterWrapper categories={categories} />
              </Suspense>
            </aside>
            <div className="w-full lg:w-3/4">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Available Products</h3>
              <ProductGrid initialProducts={products} />
            </div>
          </div>
        </main>
        <Cart />
      </div>
    </CartProvider>
  )
}

