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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;500;600&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Merriweather:wght@400;700&display=swap"
  rel="stylesheet"
/>

      </head>  
      <body className="font-montserrat antialiased">
      <header className="bg-black text-white px-5 py-7 justify-between items-center sticky top-0 z-50 shadow-lg">
  <div className="flex items-center space-x-2 ">
    <div className="w-6 h-6 rounded-full text-black bg-red-600">
      <img
        src="/images/vietnam.png"
        alt="Vietnam Flag"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <span className="text-white font-playfair text-lg">Vietnam (USD $)</span>
  </div>

  <div className="flex space-x-8 justify-center items-center pr-[60px]">
    <a href="/women" className="text-xl text-white hover:text-gray-400 font-montserrat">Women</a>
    <h1 className="text-4xl font-playfair mb-1 uppercase">Weathered</h1>
    <a href="/men" className="text-xl text-white hover:text-gray-400 mt-1 font-montserrat">Men</a>
  </div>

  <div className="flex space-x-6 justify-end mt-[-25px]">
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
  {/* Sticky Navigation */}
<nav className="bg-black text-white px-5 py-3 border-b-2 mt-[-10px] border-gray-800 sticky top-0 z-40">
  <div className="flex justify-center items-center space-x-10 font-montserrat">
    <span className="cursor-pointer hover:text-gray-400">New In</span>
    <span className="cursor-pointer hover:text-gray-400">Designers</span>
    <span className="cursor-pointer hover:text-gray-400">Clothing</span>
    <span className="cursor-pointer hover:text-gray-400">Shoes</span>
    <span className="cursor-pointer hover:text-gray-400">Bags</span>
    <span className="cursor-pointer hover:text-gray-400">Accessories</span>
    <span className="cursor-pointer hover:text-gray-400">Marketplace</span>
  </div>
</nav>
</header>




  {children}

  <footer className="bg-white text-white py-6 mt-10  border-b-2 p-10 border-gray-800 ">
  <div className="container mx-auto px-4 py-7 ">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

      {/* Thông tin công ty */}
      <div>
        <h3 className="text-xl font-montserrat cursor-pointer font-semibold mb-4 text-black">CÔNG TY CỔ PHẦN THƯƠNG MẠI HÙNG TÂM HOLDINGS</h3>
        <p className=" text-black cursor-pointer font-montserrat">
          Địa chỉ: 412/12 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, TP.HCM
        </p>
        <p className=" text-black cursor-pointer font-montserrat">GPDK: 0886007589</p>
        <p className=" text-black cursor-pointer font-montserrat">
          Đăng ký lần đầu: 19/09/2024, cấp bởi Sở Kế Hoạch và Đầu Tư TP HCM
        </p>
        <p className="text-black  cursor-pointer font-montserrat">Điện thoại: 0886007589</p>
        <p className=" text-black cursor-pointer font-montserrat">Email: letiennhatlinh08072003@gmail.com</p>
      </div>

      {/* Dịch vụ và Hỗ trợ */}
      <div>
        <h3 className="text-xl font-montserrat cursor-pointer font-semibold mb-4 text-black">Dịch Vụ và Hỗ Trợ</h3>
        <ul className=" text-black cursor-pointer font-montserrat">
          <li><a href="#" className="hover:text-gray-400">Chính sách bảo hành</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách bảo mật</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách giao nhận</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách đổi trả và hoàn phí</a></li>
          <li><a href="#" className="hover:text-gray-400">Chính sách thanh toán</a></li>
        </ul>
      </div>

      {/* Theo dõi chúng tôi */}
      <div>
        <h3 className="text-xl font-montserrat cursor-pointer font-semibold mb-4 text-black">Theo dõi chúng tôi</h3>
        <div className="flex justify-start space-x-6 pl-3">
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
        <h3 className="text-xl font-montserrat cursor-pointer font-semibold mb-4 text-black">Chứng nhận</h3>
        <div className="justify-start">
          <img src="https://www.glab.vn/images/logo-bo-cong-thuong.png" alt="Chứng nhận 1" className="w-36 h-auto" />
          <img src="https://www.glab.vn/images/logo-VNPAY-QR.png" alt="Chứng nhận 2" className="w-36 h-auto mt-5" />
        </div>
      </div>

    </div>

    {/* Bản quyền */}
    <div className="text-center mt-8">
      <p className=" text-gray-400 cursor-pointer font-montserrat">Copyright © 2024 Weathered.VN. All rights reserved.</p>
    </div>
  </div>
</footer>



</body>


    </html>  
  );  
}