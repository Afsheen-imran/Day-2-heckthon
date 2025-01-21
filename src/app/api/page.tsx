"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import homeImage from "../../../public/images/hom.jpg";

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

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

      {/* Banner Section */}
      <section className="relative min-h-[500px] w-full flex justify-center items-center overflow-hidden bg-[#ff6b6b]">
        <div
          className="relative group cursor-pointer w-full h-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/images/new.jpg" // Ensure this file exists in the public/images directory
            alt="Banner"
            fill
            className={`transition-transform duration-500 ${
              hovered ? "scale-105 brightness-110" : "scale-100"
            } object-cover`}
            priority={false}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          ></div>
        </div>
      </section>
    </main>
  );
}
