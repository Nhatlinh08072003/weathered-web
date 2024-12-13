export default function ProductGrid() {
    const products = [
      {
        id: 1,
        image:
          "https://image-raw.reversible.com/raw_images/d38b53cd6acc58594e810190e0552ca6330add9ef075fe10afc03550d09669b8",
        title: "Max Mara",
        description: "AVORIAZ Oversize stretch cotton...",
        price: "$218",
      },
      {
        id: 2,
        image:
          "https://image-raw.reversible.com/raw_images/f42c4130d9480b70b730158d48b8b39af5864c8b75d83d50b0b48bafa8052f3b",
        title: "Marc Jacobs",
        description: "THE JACQUARD SMALL TOTE...",
        price: "$207",
      },
      {
        id: 3,
        image:
          "https://image-raw.reversible.com/raw_images/ed2a83111e6280cdbdaf32669b1f4dd8cb8bbfbd9cb31129133b6a785f3e3b83",
        title: "Alexander Wang",
        description: "BITE LOGO SHORT IN DEEP...",
        price: "$177",
      },
      {
        id: 4,
        image:
          "https://image-raw.reversible.com/raw_images/90a4519393009ccb8588d1d0a5c76e86c1a81a2c7a96d6eab306e7457be35f06",
        title: "Totême",
        description: "Straight tailored shorts black",
        price: "$210",
      },
      {
        id: 5,
        image:
          "https://image-raw.reversible.com/raw_images/bf5c2ddfe5a29fd43e506413a1563c16521ba59feffca7120d45b92c5fd7e4a0",
        title: "FERRAGAMO",
        description: "Front flap crossbody bag (M)",
        price: "$1,085",
      },
    ];
  
    return (
      <div className="px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
         
            <h1 className="text-3xl text-center mb-3 font-bold text-gray-900">Shop all</h1>
       
        {/* Thanh lọc */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-gray-800">Bộ lọc sản phẩm</div>
          <div className="flex flex-wrap gap-4">
            <select className="border px-4 py-2 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg transition">
              <option>Thương hiệu</option>
              <option>Max Mara</option>
              <option>Marc Jacobs</option>
              <option>Alexander Wang</option>
            </select>
            <select className="border px-4 py-2 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg transition">
              <option>Giá</option>
              <option>Under $200</option>
              <option>$200 - $500</option>
              <option>Above $500</option>
            </select>
            <select className="border px-4 py-2 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg transition">
              <option>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>
          <select className="border px-4 py-2 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg transition">
            <option>Sắp xếp</option>
            <option>Mới nhất</option>
            <option>Bán chạy</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
        </div>
  
        {/* Grid sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] object-cover rounded-md mb-4 group-hover:opacity-80 transition duration-300"
              />
              <h3 className="font-semibold text-gray-800 text-lg group-hover:text-gray-600 transition duration-300">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-800 transition duration-300">
                {product.description}
              </p>
              <span className="block text-lg mt-2 font-semibold text-gray-900 group-hover:text-red-600 transition duration-300">
                {product.price}
              </span>
              {/* Overlay hiệu ứng */}
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
  
        {/* Nút Explore more */}
        <button className="mt-8 block mx-auto px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-lg font-semibold rounded-full hover:scale-105 hover:bg-gray-700 transition duration-300">
          Explore more
        </button>
      </div>
    );
  }
  