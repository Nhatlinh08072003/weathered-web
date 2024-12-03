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
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="font-lato antialiased">
        <>
        <header className="bg-black text-white px-5 py-4 sticky top-0 z-50 shadow-lg">
  <div className="flex items-center justify-between w-full">
    {/* Logo */}
    <a href="#" className="font-playfair text-2xl">
      <img src="/images/logo.png" alt="Logo" className="w-28 h-auto" />
    </a>

    {/* Thanh điều hướng */}
    <nav className="hidden md:flex text-lg">
      <div className="flex justify-center items-center space-x-4 lg:space-x-10">
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          New In
        </span>
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          Designers
        </span>
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          Clothing
        </span>
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          Shoes
        </span>
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          Bags
        </span>
        <span className="cursor-pointer hover:text-gray-600 transition duration-300 font-light text-base">
          Accessories
        </span>
      </div>
    </nav>

    {/* Icon và Nút Menu */}
    <div className="flex items-center space-x-4 md:space-x-6">
      <button className="md:hidden text-white text-2xl ml-auto">
        <span className="material-icons">menu</span>
      </button>
      <button className="text-white hover:text-gray-400 transition duration-300">
        <span className="material-icons text-2xl">add_shopping_cart</span>
      </button>
      <button className="text-white hover:text-gray-400 transition duration-300">
        <span className="material-icons text-2xl">notifications</span>
      </button>
      <Link href="/Account/Login">
        <button className="text-white hover:text-gray-400 transition duration-300">
          <span className="material-icons text-2xl">person</span>
        </button>
      </Link>
    </div>
  </div>
</header>


          {children}

          <footer className="bg-white text-white py-6 mt-10 border-b-2 px-6 md:px-10 border-gray-800">
  <div className="container mx-auto px-4 py-7">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left">
      {/* Thông tin công ty */}
      <div>
        <h3 className="text-lg md:text-xl font-playfair cursor-pointer font-semibold mb-4 text-black">
          CÔNG TY CỔ PHẦN THƯƠNG MẠI HÙNG TÂM HOLDINGS
        </h3>
        <p className="text-sm md:text-base text-black cursor-pointer font-lato">
          Địa chỉ: 412/12 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, TP.HCM
        </p>
        <p className="text-sm md:text-base text-black cursor-pointer font-lato">GPDK: 0886007589</p>
        <p className="text-sm md:text-base text-black cursor-pointer font-lato">
          Đăng ký lần đầu: 19/09/2024, cấp bởi Sở Kế Hoạch và Đầu Tư TP HCM
        </p>
        <p className="text-sm md:text-base text-black cursor-pointer font-lato">
          Điện thoại: 0886007589
        </p>
        <p className="text-sm md:text-base text-black cursor-pointer font-lato">
          Email: letiennhatlinh08072003@gmail.com
        </p>
      </div>

      {/* Dịch vụ và Hỗ trợ */}
      <div>
        <h3 className="text-lg md:text-xl font-playfair cursor-pointer font-semibold mb-4 text-black">
          Dịch Vụ và Hỗ Trợ
        </h3>
        <ul className="text-sm md:text-base text-black cursor-pointer font-lato space-y-2">
          <li><a href="#" className="hover:text-gray-400">Chính sách bảo hành</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách bảo mật</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách giao nhận</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách đổi trả và hoàn phí</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách thanh toán</a></li>
        </ul>
      </div>

      {/* Theo dõi chúng tôi */}
      <div>
        <h3 className="text-lg md:text-xl font-playfair cursor-pointer font-semibold mb-4 text-black">
          Theo dõi chúng tôi
        </h3>
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-red-500 hover:text-red-600">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Chứng nhận */}
      <div>
        <h3 className="text-lg md:text-xl font-playfair cursor-pointer font-semibold mb-4 text-black">
          Chứng nhận
        </h3>
        <div className="flex flex-col items-center md:items-start space-y-5">
          <img
            src="https://www.glab.vn/images/logo-bo-cong-thuong.png"
            alt="Chứng nhận 1"
            className="w-28 md:w-36 h-auto"
          />
          <img
            src="https://www.glab.vn/images/logo-VNPAY-QR.png"
            alt="Chứng nhận 2"
            className="w-28 md:w-36 h-auto"
          />
        </div>
      </div>
    </div>

    {/* Bản quyền */}
    <div className="text-center mt-8">
      <p className="text-sm md:text-base text-gray-400 cursor-pointer font-lato">
        Copyright © 2024 Weathered.VN. All rights reserved.
      </p>
    </div>
  </div>
</footer>

        </>
      </body>
    </html>
  );
}
