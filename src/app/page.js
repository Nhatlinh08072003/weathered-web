import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-grey-600 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center text-center gap-5 border-b-2 p-10 border-gray-800">
        <div className="pl-10">
          <h1 className="text-3xl text-white text-center items-center  font-bold mb-4 pr-4">WELCOME TO WEATHERED</h1>
          <p className="mb-10 text-white text-center items-center  max-w-xl text-sm">
          Tại Weathered, chúng tôi tái định nghĩa phong cách thời trang vượt thời gian với bộ sưu tập kết hợp sự mạnh mẽ và thanh lịch hiện đại.
Thiết kế của chúng tôi tập trung vào sự tinh xảo và chất lượng cao, với các sản phẩm đa năng phù hợp cho mọi mùa trong năm. Từ những chiếc áo khoác đặc trưng, áo len thoải mái, đến quần âu được may đo kỹ lưỡng và trang phục ngoài trời sang trọng, Weathered mang đến những sản phẩm bền bỉ với thời gian.

Khám phá phong cách tinh tế cùng Weathered—thương hiệu tôn vinh độ bền, sự chân thực và vẻ đẹp của sự giản đơn.


          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">  
          {/* WOMENSWEAR */}  
          <div className="p-4 rounded-lg text-center w-[45%] relative transition-transform transform hover:scale-105">  
            <img src="/images/women.jpg" alt="Womenswear" className="rounded-lg mb-4 w-full h-auto object-cover" />  
            <h2 className="text-2xl font-bold absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">SHOP WOMENSWEAR</h2>  
          </div>  

          {/* MENSWEAR */}  
          <div className="p-4 rounded-lg text-center w-[45%] relative transition-transform transform hover:scale-105">  
            <img src="/images/men.jpg" alt="Menswear" className="rounded-lg mb-4 w-full h-auto object-cover" />  
            <h2 className="text-2xl font-bold absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">SHOP MENSWEAR</h2>  
          </div>  
        </div>  
        
      </main>
    {/* Trending Products Section */}  
    <section className="bg-grey-600 py-10 mt-3">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-extrabold text-center text-white mb-5">NEW ARRIVALS</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {/* Product Item 1 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae74544668.jpg"
          alt="Vintage Penalty Sao Paulo 2002 Home Jerseys"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Vintage Penalty Sao Paulo 2002 Home Jerseys
        </h3>
        <p className="text-lg text-gray-300">650,000 VND</p>
      </div>

      {/* Product Item 2 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/06/12/480x320/666919f3bd8f5.jpg"
          alt="Adidas Men's Soccer Manchester United 23/24 Home Jersey"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Adidas Men's Soccer Manchester United 23/24 Home Jersey
        </h3>
        <p className="text-lg text-gray-300">950,000 VND</p>
      </div>

      {/* Product Item 3 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8e735b1f.jpg"
          alt="Vintage Nike PSG 1997/98 Home Football Jersey"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Vintage Nike PSG 1997/98 Home Football Jersey
        </h3>
        <p className="text-lg text-gray-300">2,200,000 VND</p>
      </div>

      {/* Product Item 4 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e33b66e2.jpg"
          alt="Vintage 90s Penalty Gremio Home 1993 Jersey"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Vintage 90s Penalty Gremio Home 1993 Jersey
        </h3>
        <p className="text-lg text-gray-300">1,840,000 VND</p>
      </div>

      {/* Product Item 5 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e24e9447.jpg"
          alt="Vintage 90s Penalty Gremio Away 1997 Jersey #7"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Vintage 90s Penalty Gremio Away 1997 Jersey #7
        </h3>
        <p className="text-lg text-gray-300">1,840,000 VND</p>
      </div>

      {/* Product Item 6 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/03/05/480x320/65e6ace613503.jpg"
          alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          UMBRO x CARNIVAL Special Pack Football Jersey Black/White
        </h3>
        <p className="text-lg text-gray-300">2,840,000 VND</p>
      </div>

      {/* Product Item 7 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/09/15/480x320/66e689b26ad11.jpg"
          alt="Puma x AC Milan x PLEASURES Jersey"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Puma x AC Milan x PLEASURES Jersey
        </h3>
        <p className="text-lg text-gray-300">3,850,000 VND</p>
      </div>

      {/* Product Item 8 */}
      <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          src="https://www.glab.vn/storage/products/2024/08/25/480x320/66caf6dc09b2a.jpg"
          alt="Vintage Puma Everton 2003/04 Home Jersey #18 Rooney"
          className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
          Vintage Puma Everton 2003/04 Home Jersey #18 Rooney
        </h3>
        <p className="text-lg text-gray-300">1,650,000 VND</p>
      </div>
    </div>
    <div className="text-center mt-10">
      <button className="bg-gray-700 text-white py-3 px-10 rounded-lg font-semibold hover:bg-gray-600 hover:scale-105 transition-all duration-300">
        View all
      </button>
    </div>
  </div>
</section>

<div className="flex items-center justify-center w-full h-screen mt-[-50px]">
  {/* Container hình ảnh và nội dung */}
  <div className="relative w-[95%] h-[80vh] flex items-center justify-center">
    {/* Ảnh nền */}
    <img 
      src="https://www.electricland-tokyo.com/cdn/shop/files/2021-03-03-17-46-18.jpg?v=1617811192"
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
    />
    {/* Nội dung hiển thị đè */}
    <div className="absolute flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-6 rounded-md">
      <h1 className="text-4xl text-white font-extrabold mb-6">
        WELCOME TO VINTAGE SHOP
      </h1>
      <p className="text-white max-w-2xl text-base leading-relaxed mb-6">
      Thời trang Vintage là sự kết nối giữa quá khứ và hiện tại, mang đến những thiết kế vượt thời gian và đầy hoài niệm. Mỗi bộ trang phục Vintage không chỉ là một món đồ mà còn là một câu chuyện, phản ánh nét đặc trưng của từng thời kỳ trong lịch sử.

Với sự đa dạng từ những chiếc đầm thanh lịch của thập niên 50, phong cách tự do của thập niên 70, đến những bộ suit cá tính của thập niên 90, thời trang Vintage tôn vinh vẻ đẹp độc đáo, cá tính và không bao giờ lỗi mốt.

Lựa chọn thời trang Vintage không chỉ là cách thể hiện phong cách riêng mà còn là sự trân trọng đối với chất liệu, thiết kế và nghệ thuật thủ công của một thời đại. Hãy để Vintage đưa bạn quay ngược thời gian, khám phá vẻ đẹp tinh tế và tạo dấu ấn cá nhân đậm chất cổ điển!
      </p>
      {/* Nút chuyển hướng */}
      <a 
        href="/vintageshop" 
        className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        Vintage Shop
      </a>
    </div>

  </div>
  
</div>
{/* Vintage Products Section */}
<div className=" w-full p-4">
  <h2 className="text-3xl font-extrabold text-white text-center mb-8">Featured Vintage Products</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
  {/* Product Item 1 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8c626cbf.jpg" 
      alt="Vintage Nike PSG 1997/98 Home Football Jersey" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 1998 AOP Allover Kelloggs Terry Labonte Nascar Tee Faded Black
    </h3>
    <p className="text-lg text-gray-300">2,750,000 VND</p>
  </div>

  {/* Product Item 2 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/06/21/480x320/6675001eefcfc.jpg" 
      alt="Vintage 90s Penalty Gremio Home 1993 Jersey" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 90s Anvil Lakers Magic Johnson Big Face Tee Black
    </h3>
    <p className="text-lg text-gray-300">3,840,000 VND</p>
  </div>

  {/* Product Item 3 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae825eeb67.jpg" 
      alt="Vintage Puma Everton 2003/04 Home Jersey #18 Rooney" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage Nike ACG Tee Black
    </h3>
    <p className="text-lg text-gray-300">650,000 VND</p>
  </div>

  {/* Product Item 4 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/06/21/480x320/6674ffd668505.jpg" 
      alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 90s Looney Tunes Taz x MLB NY Team Tee Navy
    </h3>
    <p className="text-lg text-gray-300">2,840,000 VND</p>
  </div>

  {/* Product Item 5 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/11/28/480x320/674867d624948.jpg" 
      alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 90s Nike Barkley Tee White
    </h3>
    <p className="text-lg text-gray-300">1,650,000 VND</p>
  </div>

  {/* Product Item 6 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8f6342a8.jpg" 
      alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage Devil Man Japan Manga Anime Tee White
    </h3>
    <p className="text-lg text-gray-300">1,650,000 VND</p>
  </div>

  {/* Product Item 7 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/06/21/480x320/6675024802a6b.jpg" 
      alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 90s Looney Tunes Taz Hot Tempered Tee
    </h3>
    <p className="text-lg text-gray-300">2,240,000 VND</p>
  </div>

  {/* Product Item 8 */}
  <div className="group bg-grey-700 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <img 
      src="https://www.glab.vn/storage/products/2024/06/21/480x320/6675016ab8ca8.jpg" 
      alt="UMBRO x CARNIVAL Special Pack Football Jersey Black/White" 
      className="w-full h-auto mb-2 rounded group-hover:scale-105 transition-transform duration-300"
    />
    <h3 className="font-semibold text-lg text-white group-hover:text-red-500 transition-colors duration-300">
      Vintage 90s Looney Tunes Yosemite Sam Tee Navy
    </h3>
    <p className="text-lg text-gray-300">3,740,000 VND</p>
  </div>
</div>

   <div className="text-center  ">  
      <button className="bg-gray-700  text-white py-3 px-10 rounded-lg  font-semibold hover:bg-gray-600 transition">View all</button>  
    </div> 
</div>
<div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-red-700 via-red-500 to-red-700 overflow-hidden rounded-lg shadow-lg">
  {/* Background Image */}
  <img 
    src="https://cdn.pixabay.com/photo/2016/11/18/22/15/shopping-1836496_1280.jpg" 
    alt="Sale Background" 
    className="absolute hidden inset-0 w-full h-full object-cover opacity-50"
  />

  {/* Sale Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      BIG SALE UP TO 50% OFF!
    </h2>
    <p className="text-lg md:text-2xl font-medium mb-6">
      Don't miss out on our exclusive deals. Limited time only!
    </p>
    <a 
      href="/sale" 
      className="px-6 py-3 bg-white text-red-700 font-bold text-lg rounded-md shadow-md hover:bg-gray-200 transition-all duration-300"
    >
      Shop Now
    </a>
  </div>
</div>
<section className="py-10 bg-gray-100">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-bold text-black text-center mb-10">Hot Deals - Sale Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2021/02/04/480x320/601ba3545a88c.jpg"
          alt="Product 1"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -30%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            Nike Dunk Low Retro White Black
          </h3>
          <p className="text-gray-500 line-through">3,200,000 VND</p>
          <p className="text-red-500 font-bold">1,840,000 VND</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2024/11/28/480x320/674865a402d82.jpg"
          alt="Product 2"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -20%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            New Balance 1906D Protection Pack Black Leather
          </h3>
          <p className="text-gray-500 line-through">4,800,000 VND</p>
          <p className="text-red-500 font-bold">3,640,000 VND</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2022/12/22/480x320/63a42587bf17e.jpg"
          alt="Product 3"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -40%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            adidas Adifom Superstar White
          </h3>
          <p className="text-gray-500 line-through">1,200,000 VND</p>
          <p className="text-red-500 font-bold">700,000 VND</p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2022/02/28/480x320/621cb014861a7.jpg"
          alt="Product 4"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -25%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            Nike Dunk Low Essential Paisley Pack Worn Blue (W)
          </h3>
          <p className="text-gray-500 line-through">3,400,000 VND</p>
          <p className="text-red-500 font-bold">2,500,000 VND</p>
        </div>
      </div>

      {/* Product 5 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2021/10/28/480x320/617a2ada1b7cb.jpg"
          alt="Product 5"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -17%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            adidas Yeezy Boost 350 V2 Mono Clay
          </h3>
          <p className="text-gray-500 line-through">3,800,000 VND</p>
          <p className="text-red-500 font-bold">3,000,000 VND</p>
        </div>
      </div>

      {/* Product 6 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae7cdbc249.jpg"
          alt="Product 6"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -30%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            adidas Samba OG Hazy Green (Women's)
          </h3>
          <p className="text-gray-500 line-through">2,400,000 VND</p>
          <p className="text-red-500 font-bold">1,500,000 VND</p>
        </div>
      </div>

      {/* Product 7 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2023/06/17/480x320/648d9bdf17542.jpg"
          alt="Product 7"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -28%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            adidas Yeezy Foam RNR Clay Taupe
          </h3>
          <p className="text-gray-500 line-through">2,750,000 VND</p>
          <p className="text-red-500 font-bold">1,760,000 VND</p>
        </div>
      </div>

      {/* Product 8 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <img
          src="https://www.glab.vn/storage/products/2024/11/28/480x320/67486639f206e.jpg"
          alt="Product 8"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -15%
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg text-black font-semibold mb-2 group-hover:text-red-500 transition-colors duration-300">
            adidas Clarks 8th Street AS350 x Ronnie Fieg x Clarks Elevation
          </h3>
          <p className="text-gray-500 line-through">7,700,000 VND</p>
          <p className="text-red-500 font-bold">6,500,000 VND</p>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-10">
      <button className="bg-gray-700 text-white py-3 px-10 rounded-lg font-semibold hover:bg-gray-600 hover:scale-105 transition-all duration-300">
        View all
      </button>
</div>
</section>

<section className="bg-grey-300 py-10 mt-10  ">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-extrabold text-center text-white mb-8">Thông tin mua sắm</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
      
      {/* Đổi trả hàng */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex items-center  justify-center mb-4">
          <i className="fas fa-undo-alt text-3xl mr-4 text-blue-500"></i> {/* Icon đổi trả */}
          <h3 className="text-xl  font-semibold">Chính sách đổi trả hàng</h3>
        </div>
        <p className="text-lg  text-gray-300">
          Nếu bạn không hài lòng với sản phẩm, bạn có thể đổi trả trong vòng 14 ngày kể từ ngày nhận hàng. Sản phẩm cần giữ nguyên tình trạng ban đầu, chưa qua sử dụng và còn đầy đủ bao bì.
        </p>
        {/* Thêm hình ảnh */}
        <img src="https://example.com/return-image.jpg" alt="Chính sách đổi trả" className="mt-4 w-full hidden h-auto rounded-md"/>
      </div>

      {/* Phương thức thanh toán */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-credit-card text-3xl mr-4 text-green-500"></i> {/* Icon thanh toán */}
          <h3 className="text-xl   font-semibold">Phương thức thanh toán</h3>
        </div>
        <ul className="text-lg  text-gray-300">
          <li>- Thanh toán qua thẻ tín dụng, thẻ ghi nợ</li>
          <li>- Thanh toán qua ví điện tử (Momo, ZaloPay, VNPAY...)</li>
          <li>- Thanh toán khi nhận hàng (COD)</li>
        </ul>
        {/* Thêm hình ảnh */}
        <img src="https://example.com/payment-image.jpg" alt="Phương thức thanh toán" className="mt-4 w-full hidden  h-auto rounded-md"/>
      </div>

      {/* Hình thức vận chuyển */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-truck text-3xl mr-4 text-yellow-500"></i> {/* Icon vận chuyển */}
          <h3 className="text-xl font-semibold">Hình thức vận chuyển</h3>
        </div>
        <p className="text-lg text-gray-300">
          Chúng tôi cung cấp các dịch vụ vận chuyển nhanh chóng qua các đối tác như Viettel Post, Giao Hàng Nhanh, J&T Express. Thời gian giao hàng dao động từ 2-5 ngày làm việc tùy vào địa chỉ nhận hàng.
        </p>
        {/* Thêm hình ảnh */}
        <img src="https://example.com/shipping-image.jpg" alt="Hình thức vận chuyển" className="mt-4 hidden  w-full h-auto rounded-md"/>
      </div>

    </div>
  </div>
</section>




    </div>
  );
}
