"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#dropdownMenu") && !event.target.closest("#dropdownTrigger")) {
        setDropdownOpen(false);
      }
      if (!event.target.closest("#navbar") && !event.target.closest("#mobileMenuButton")) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="font-lato antialiased">
        <header className="sticky top-0 left-0 w-full bg-black bg-opacity-70 text-white px-10 py-4 z-50">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="font-playfair text-2xl">
              <img src="/images/logo.png" alt="Logo" className="w-28 h-auto" />
            </Link>

            {/* Navigation */}
            <nav id="navbar" className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex text-lg`}>
              <div className="flex justify-center items-center space-x-6 lg:space-x-10">
                <Link href="/" className="hover:text-gray-600 font-medium transition duration-300 text-base">HOME</Link>

                {/* Dropdown Menu */}
                <div className="relative inline-block text-left">
                  <button
                    id="dropdownTrigger"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    SHOP
                    <span className="ml-1">&#9662;</span>
                  </button>
                  <div id="dropdownMenu" className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${isDropdownOpen ? "block" : "hidden"} bg-white shadow-lg mt-2 w-screen max-w-4xl rounded-md`}>
                    <ul className="py-2">
                      <li><Link href="/shop/clothing" className="block px-4 py-2 text-black">Clothing</Link></li>
                      <li><Link href="/shop/accessories" className="block px-4 py-2 text-black">Accessories</Link></li>
                    </ul>
                  </div>
                </div>

                <span className="cursor-pointer font-medium hover:text-gray-600 transition duration-300 text-base">NEW MERCH</span>
                <span className="cursor-pointer font-medium hover:text-gray-600 transition duration-300 text-base">CONTACT</span>
              </div>
            </nav>

            {/* Mobile Menu Icon */}
            <button id="mobileMenuButton" onClick={() => setMobileMenuOpen((prev) => !prev)} className="md:hidden text-white text-xl focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="text-white hover:text-gray-400 transition duration-300">
                <i className="fas fa-shopping-cart text-xl"></i>
              </button>
              <button className="text-white hover:text-gray-400 transition duration-300">
                <i className="fas fa-bell text-xl"></i>
              </button>
              <Link href="/Account/Login" className="text-white hover:text-gray-400 transition duration-300">
                <i className="fas fa-user text-xl"></i>
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
