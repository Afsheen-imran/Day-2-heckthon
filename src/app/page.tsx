"use client"; // Ensures client-side rendering in Next.js
import banner from "../../public/images/new.jpg";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [darkMode] = useState(false); // Removed the unused setDarkMode function

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <main className="bg-gray-50 dark:bg-gray-900">
        <section className="relative bg-[#ff6b6b] dark:bg-red-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Discover Your Perfect Beauty Products
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Explore our curated collection of premium beauty and lifestyle
                  products.
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-white text-[#ff6b6b] dark:bg-gray-800 dark:text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </Link>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full animate-on-scroll">
                <Image
                  src="/images/hom.jpg"
                  alt="Featured Products"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-on-scroll">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Home Decor", "perfume", "Kitchen Product", "Bueaty product"].map(
                (category) => (
                  <div
                    key={category}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-on-scroll"
                  >
                    <div className="w-16 h-16 bg-[#ff6b6b] dark:bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">
                      {category}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-on-scroll">
              Best Sellers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "SWISS", price: "$99.00", image: "/images/sw.jpg" },
                { name: "MICRONE JUICER", price: "$150.00", image: "/images/jus.jpg" },
                { name: "SWISTER", price: "$250.00", image: "/images/wa.jpg" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll"
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-[#ff6b6b] dark:text-red-400 font-bold">
                      {product.price}
                    </p>
                    <button className="mt-4 w-full bg-[#ff6b6b] dark:bg-red-600 text-white py-2 rounded-md hover:bg-[#ff5252] dark:hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[500px] w-full flex justify-center items-center overflow-hidden bg-[#ff6b6b]">
          <div className="mt-20 relative w-full h-[200px] md:h-[400px] lg:h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={banner}
              alt="banner"
              fill
              className="bj-cover"
            />
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-on-scroll">
              New Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "HAVCO", price: "$199.00", image: "/images/np.jpg" },
                { name: "MICRONE JUICER", price: "$150.00", image: "/images/jus.jpg" },
                { name: "CHRISTAIN", price: "$250.00", image: "/images/bag.jpg" },
                { name: "SWISS", price: "$99.00", image: "/images/sw.jpg" },
                { name: "MICRONE JUICER", price: "$150.00", image: "/images/dec.jpeg" },
                { name: "SUMMER", price: "$250.00", image: "/images/tt.jpg" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll"
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-[#ff6b6b] dark:text-red-400 font-bold">
                      {product.price}
                    </p>
                    <button className="mt-4 w-full bg-[#ff6b6b] dark:bg-red-600 text-white py-2 rounded-md hover:bg-[#ff5252] dark:hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
