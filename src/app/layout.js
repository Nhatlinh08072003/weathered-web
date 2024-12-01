import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Link from 'next/link';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        <header className="bg-black text-white px-5 py-7 flex justify-between items-center border-b-2 border-gray-800">
          {/* Quốc gia và tiền tệ */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full text-black bg-red-600">
              <img
                src="/images/vietnam.png"
                alt="Vietnam Flag"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-white">Vietnam (USD $)</span>
          </div>

          {/* Text và danh mục */}
          <div className="flex space-x-8 justify-center items-center pr-[60px]">
            <a href="/women" className="text-xl text-white hover:text-gray-400">Women</a>
            {/* Logo */}
            {/* <img className="w-[120px] h-[120px]" src="/images/logo.jpg" alt="Logo" /> */}
            <h1 className="text-4xl font-semibold mb-1 uppercase">
              Weathered
            </h1>
            <a href="/men" className="text-xl text-white hover:text-gray-400 mt-1">Men</a>
          </div>

          {/* Các biểu tượng */}
          <div className="flex space-x-6">
            <button className="text-white hover:text-gray-400">
              <span className="material-icons text-white">add_shopping_cart</span> {/* Giỏ hàng */}
            </button>
            <button className="text-white hover:text-gray-400">
              <span className="material-icons text-white">notifications</span> {/* Thông báo */}
            </button>
            <Link href="/Account/Login">
            <button className="text-white hover:text-gray-400">
              <span className="material-icons text-white">person</span> {/* Tài khoản */}
            </button>
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
