'use client';
import { useState } from 'react';

export default function ProductDetailPage() {
  const product = {
    id: 1,
    image: "https://example.com/image.jpg", // Example image URL
    title: "STUSSY WORLDWIDE LS TEE PIGMENT DYED BLACK TEE",
    brand: "STUSSY",
    price: 3050000, // in VND
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

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-800">{product.brand}</p>
          <span className="text-2xl font-bold text-red-600">{new Intl.NumberFormat().format(product.price)}₫</span>
          
          {/* Size Selector */}
          <div className="mt-4">
            <label htmlFor="size" className="block text-lg font-medium text-gray-700">Choose Your Size</label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-2 p-3 border rounded-lg w-full text-gray-800"
            >
              <option value="">Select Size</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition duration-200">
              Thêm vào giỏ
            </button>
          </div>

          {/* Chat Now Button */}
          <div className="mt-4">
            <a
              href="https://m.me/yourfacebookpage" // Replace with your Facebook Messenger link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 text-center"
            >
              Chat ngay
            </a>
          </div>

          {/* Product Information */}
          <div className="mt-8 space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Thông tin sản phẩm</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {product.productInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-500"
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
