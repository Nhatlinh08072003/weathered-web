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
    <h2 className="text-3xl font-extrabold text-white pl-5 ">NEW ARRIVALS</h2> {/* Updated header font */}  
    <div className="flex mb-5">  
      <button className="bg-gray-600 hidden  rounded-xl text-white py-2 px-4  mx-2 font-medium hover:bg-gray-500 transition">Seasonal</button> {/* Button font */}  
      <button className="bg-gray-600 hidden rounded-xl text-white py-2 px-4  mx-2 font-medium hover:bg-gray-500 transition">Marketplace</button> {/* Button font */}  
    </div>  
    <div className="grid grid-cols-2 md:grid-cols-3 mt-[-30px] p-10 lg:grid-cols-4 gap-10">  
      {/* Product Item 1 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae74544668.jpg" alt="Dolce & Gabbana" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Penalty Sao Paulo 2002 Home Jerseys</h3> {/* Updated product title font */}  
        <p className="text-lg text-gray-300">650,000 VND</p>  
      </div>  

      {/* Product Item 2 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/06/12/480x320/666919f3bd8f5.jpg" alt="Bottega Veneta" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Adidas Men's Soccer Manchester United 23/24 Home Jersey</h3>  
        <p className="text-lg text-gray-300">950,000 VND</p>  
      </div>  

      {/* Product Item 3 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8e735b1f.jpg" alt="Burberry" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Nike PSG 1997/98 Home Football Jersey</h3>  
        <p className="text-lg text-gray-300">2,200,000 VND</p>  
      </div>  

      {/* Product Item 4 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e33b66e2.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage 90s Penalty Gremio Home 1993 Jersey</h3>  
        <p className="text-lg text-gray-300">1,840,000 VND</p>  
      </div>  

      {/* Product Item 5 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e24e9447.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage 90s Penalty Gremio Away 1997 Jersey #7</h3>  
        <p className="text-lg text-gray-300">1,840,000 VND</p>  
      </div>  

      {/* Product Item 6 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/03/05/480x320/65e6ace613503.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">UMBRO x CARNIVAL Special Pack Football Jersey Black/White</h3>  
        <p className="text-lg text-gray-300">2,840,000 VND</p>  
      </div>  

      {/* Product Item 7 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/09/15/480x320/66e689b26ad11.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Puma x AC Milan x PLEASURES Jersey</h3>  
        <p className="text-lg text-gray-300">3,850,000 VND</p>  
      </div>  

      {/* Product Item 8 */}  
      <div className="bg-grey-700  rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/08/25/480x320/66caf6dc09b2a.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Puma Everton 2003/04 Home Jersey #18 Rooney</h3>  
        <p className="text-lg text-gray-300">1,650,000 VND</p>  
      </div>  
    </div>  
    <div className="text-center  ">  
      <button className="bg-gray-700  text-white py-3 px-10 rounded-lg  font-semibold hover:bg-gray-600 transition">View all</button>  
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




    </div>
  );
}
