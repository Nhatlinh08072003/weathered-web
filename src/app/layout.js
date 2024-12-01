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
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"  
      rel="stylesheet"  
    />  
    <link  
      href="https://fonts.googleapis.com/icon?family=Material+Icons"  
      rel="stylesheet"  
    />  
      </head>  
      <body className="font-poppins antialiased">  
        <header className="bg-black text-white px-5 py-7 flex justify-between items-center ">  
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

          <div className="flex space-x-8 justify-center items-center pr-[60px]">  
            <a href="/women" className="text-xl text-white hover:text-gray-400">Women</a>  
            <h1 className="text-4xl font-semibold mb-1 uppercase">Weathered</h1>  
            <a href="/men" className="text-xl text-white hover:text-gray-400 mt-1">Men</a>  
          </div>  

          <div className="flex space-x-6">  
            <button className="text-white hover:text-gray-400">  
              <span className="material-icons text-white">add_shopping_cart</span>  
            </button>  
            <button className="text-white hover:text-gray-400">  
              <span className="material-icons text-white">notifications</span>  
            </button>  
            <Link href="/Account/Login">  
              <button className="text-white hover:text-gray-400">  
                <span className="material-icons text-white">person</span>  
              </button>  
            </Link>  
          </div>  
        </header>  

      
    {/* Centered navigation section */}  
    <nav className="bg-black text-white px-5 py-3 border-b-2 mt-[-30px] border-gray-800">  
      <div className="flex justify-center items-center space-x-10 font-roboto">  
        <span className="cursor-pointer hover:text-gray-400">New In</span>  
        <span className="cursor-pointer hover:text-gray-400">Designers</span>  
        <span className="cursor-pointer hover:text-gray-400">Clothing</span>  
        <span className="cursor-pointer hover:text-gray-400">Shoes</span>  
        <span className="cursor-pointer hover:text-gray-400">Bags</span>  
        <span className="cursor-pointer hover:text-gray-400">Accessories</span>  
        <span className="cursor-pointer hover:text-gray-400">Marketplace</span>  
      </div>  
    </nav>  

        {children}  
      </body>  
    </html>  
  );  
}