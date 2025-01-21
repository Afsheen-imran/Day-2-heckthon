"use client";

import {  useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../../public/images/new.jpg"

import homeImage from "../../../public/images/hom.jpg";

export default function HomePage() {
  // const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize animations
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#ff6b6b] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Perfect Beauty Products
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Explore our curated collection of premium beauty and lifestyle
                products.
              </p>
              <Link
                href="/products"
                className="inline-block bg-white text-[#ff6b6b] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
            </div>
            <div
              className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
              data-aos="fade-left"
            >
              <Image
                src={homeImage}
                alt="Featured Products"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Shop by Category
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            {["Home Decor", "perfume", "Kitchen Product", "Bueaty product"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="fade-up"
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-[#ff6b6b] font-bold">{product.price}</p>
                  <button className="mt-4 w-full bg-[#ff6b6b] text-white py-2 rounded-md hover:bg-[#ff5252] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Banner Section */}
        <section className="relative min-h-[500px] w-full flex justify-center items-center overflow-hidden bg-[#ff6b6b]">
        {/* <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={banner}
            alt="Banner"
            fill
            className={`transition-transform duration-500 ${
              hovered ? "scale-105 brightness-110" : "scale-100"
            } object-cover`}
          />
          <div
            className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          ></div>
        </div> */}
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
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-on-scroll">New Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "SWISS", price: "$99.00", image: "/images/sw.jpg" },
                { name: "MICRONE JUICER", price: "$150.00", image: "/images/jus.jpg" },
                { name: "SWISTER", price: "$250.00", image: "/images/wa.jpg" },
                { name: "SWISS", price: "$99.00", image: "/images/sw.jpg" },
                { name: "MICRONE JUICER", price: "$150.00", image: "/images/jus.jpg" },
                { name: "SWISTER", price: "$250.00", image: "/images/wa.jpg" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll"
                >
                  <div className="relative h-[300px] w-full">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h3>
                    <p className="text-[#ff6b6b] dark:text-red-400 font-bold">{product.price}</p>
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
  );
}
