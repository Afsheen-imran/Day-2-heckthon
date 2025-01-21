"use client"

import { useState } from "react"
import Image from "next/image"

interface Order {
  id: string
  date: string
  status: string
  total: string
  items: {
    name: string
    quantity: number
    price: number
    image: string
  }[]
}

export default function OrdersPage() {
  const [orders] = useState<Order[]>([
    {
      id: "#12345",
      date: "2024-01-20",
      status: "Delivered",
      total: "$299.99",
      items: [
        {
          name: "SWISS Watch",
          quantity: 1,
          price: 299.99,
          image: "/images/sw.jpg",
        },
      ],
    },
    {
      id: "#12346",
      date: "2024-01-18",
      status: "In Transit",
      total: "$199.99",
      items: [
        {
          name: "MICRONE JUICER",
          quantity: 1,
          price: 199.99,
          image: "/images/jus.jpg",
        },
      ],
    },
    {
      id: "#12347",
      date: "2024-01-15",
      status: "Processing",
      total: "$149.99",
      items: [
        {
          name: "SWISTER",
          quantity: 1,
          price: 149.99,
          image: "/images/wa.jpg",
        },
      ],
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Order ID: {order.id}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Placed on {order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {order.status}
                    </span>
                    <p className="font-semibold text-gray-900 dark:text-white">{order.total}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

