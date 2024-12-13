'use client';
import { useState } from 'react';

export default function ProductDetailPage() {
  const product = {
    id: 1,
    images: [
      "https://product.hstatic.net/200000475003/product/57_4afd32914613489dbcf1e5e9f581b47e_master.png",
      "https://product.hstatic.net/200000475003/product/58_c49ac3869f244077980390c9b714a6b4_master.png", // Replace with actual images
      
    ],
    title: "STUSSY WORLDWIDE LS TEE PIGMENT DYED BLACK TEE",
    brand: "STUSSY",
    price: 3050000, // Price in VND
    sizes: ["S", "M", "L", "XL"],
    description: "Long sleeve tee with a pigment dyed finish.",
    productInfo: [
      "Authentic product 100%",
      "Free product exchange within 03 days of purchase (applies to products of the same or higher value)",
      "Returned products must be in original packaging and unused.",
      "Sản phẩm chính hãng 100%",
      "Đổi sản phẩm miễn phí trong vòng 03 ngày kể từ ngày mua hàng (áp dụng cho sản phẩm có cùng giá trị hoặc cao hơn)."
    ],
  };

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex w-full justify-center items-center  rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full max-w-2xl object-cover rounded-lg transition-transform "
            />
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product thumbnail ${index}`}
                  className="w-32 h-32 object-cover cursor-pointer rounded-lg border-2 transition-transform transform hover:scale-110"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white shadow-xl rounded-xl p-6 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-800">{product.brand}</p>
          <span className="text-2xl font-bold text-red-600">{new Intl.NumberFormat().format(product.price)}₫</span>

          {/* Size Selector */}
          <div className="mt-4">
            <label htmlFor="size" className="block text-lg font-medium text-gray-700">Choose Your Size</label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select Size</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">
            {/* Add to Cart Button */}
            <button className="w-full py-3 bg-black text-white text-center text-lg font-semibold rounded-lg hover:bg-gray-800 transition duration-200 transform hover:scale-105">
              Thêm vào giỏ
            </button>
            {/* Chat Now Button */}
            <a
              href="https://m.me/yourfacebookpage" // Replace with your Facebook Messenger link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 bg-blue-600 text-center text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              Chat ngay
            </a>
          </div>

          {/* Product Information */}
          <div className="mt-8 space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Thông tin sản phẩm</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {product.productInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2 hover:bg-gray-50 p-2 rounded-lg transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm1-13a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm-2 3V8a1 1 0 112 0v2a1 1 0 11-2 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
