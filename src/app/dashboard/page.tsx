"use client"

import { useState } from "react"
import Image from "next/image"

export default function DashboardPage() {
  const [stats] = useState([
    { title: "Total Orders", value: "24", change: "+12%" },
    { title: "Total Spent", value: "$1,234", change: "+8%" },
    { title: "Active Orders", value: "2", change: "0%" },
    { title: "Wishlist Items", value: "15", change: "+3%" },
  ])

  const [recentOrders] = useState([
    { id: "#12345", date: "2024-01-20", status: "Delivered", total: "$299.99" },
    { id: "#12346", date: "2024-01-18", status: "In Transit", total: "$199.99" },
    { id: "#12347", date: "2024-01-15", status: "Processing", total: "$149.99" },
  ])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back,</p>
              <p className="font-medium text-gray-900 dark:text-white">Haroon khan</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image src="/images/haron.jpg" alt="Profile" width={48} height={48} className="object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                <span
                  className={`ml-2 text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-500"
                      : stat.change === "0%"
                        ? "text-gray-500"
                        : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Order ID</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{order.date}</td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

