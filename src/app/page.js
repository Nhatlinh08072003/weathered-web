import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-grey-600 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center text-center gap-5 border-b-2 p-10 border-gray-800">
        <div className="pl-10">
          <h1 className="text-3xl text-white text-center items-center  font-bold mb-4 pr-4">WELCOME TO REVERSIBLE</h1>
          <p className="mb-10 text-white text-center items-center  max-w-xl text-sm">
            At REVERSIBLE, we offer an extensive collection of Designer Clothing for every discerning taste, featuring all the luxury brands and designers you adore.
            Our selection includes exquisite apparel, accessories, and shoes from celebrated designers such as AMIRI, Thom Browne, Dolce & Gabbana, Christian Louboutin, and more.
            Explore our diverse styles and curate your timeless wardrobe with the latest and finest from the fashion world.
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
    <h2 className="text-3xl font-extrabold text-white mb-5">WHAT'S TRENDING NOW</h2> {/* Updated header font */}  
    <div className="flex mb-5">  
      <button className="bg-gray-600 rounded-xl text-white py-2 px-4  mx-2 font-medium hover:bg-gray-500 transition">Seasonal</button> {/* Button font */}  
      <button className="bg-gray-600 rounded-xl text-white py-2 px-4  mx-2 font-medium hover:bg-gray-500 transition">Marketplace</button> {/* Button font */}  
    </div>  
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  
      {/* Product Item 1 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae74544668.jpg" alt="Dolce & Gabbana" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Penalty Sao Paulo 2002 Home Jerseys</h3> {/* Updated product title font */}  
        <p className="text-lg text-gray-300">650,000 VND</p>  
      </div>  

      {/* Product Item 2 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/06/12/480x320/666919f3bd8f5.jpg" alt="Bottega Veneta" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Adidas Men's Soccer Manchester United 23/24 Home Jersey</h3>  
        <p className="text-lg text-gray-300">950,000 VND</p>  
      </div>  

      {/* Product Item 3 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/11/18/480x320/673ae8e735b1f.jpg" alt="Burberry" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Nike PSG 1997/98 Home Football Jersey</h3>  
        <p className="text-lg text-gray-300">2,200,000 VND</p>  
      </div>  

      {/* Product Item 4 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e33b66e2.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage 90s Penalty Gremio Home 1993 Jersey</h3>  
        <p className="text-lg text-gray-300">1,840,000 VND</p>  
      </div>  

      {/* Product Item 5 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/10/16/480x320/670f6e24e9447.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage 90s Penalty Gremio Away 1997 Jersey #7</h3>  
        <p className="text-lg text-gray-300">1,840,000 VND</p>  
      </div>  

      {/* Product Item 6 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/03/05/480x320/65e6ace613503.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">UMBRO x CARNIVAL Special Pack Football Jersey Black/White</h3>  
        <p className="text-lg text-gray-300">2,840,000 VND</p>  
      </div>  

      {/* Product Item 7 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/09/15/480x320/66e689b26ad11.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Puma x AC Milan x PLEASURES Jersey</h3>  
        <p className="text-lg text-gray-300">3,850,000 VND</p>  
      </div>  

      {/* Product Item 8 */}  
      <div className="bg-grey-700 p-4 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">  
        <img src="https://www.glab.vn/storage/products/2024/08/25/480x320/66caf6dc09b2a.jpg" alt="Saint Laurent" className="w-full h-auto mb-2 rounded" />  
        <h3 className="font-semibold text-lg text-white">Vintage Puma Everton 2003/04 Home Jersey #18 Rooney</h3>  
        <p className="text-lg text-gray-300">1,650,000 VND</p>  
      </div>  
    </div>  
    <div className="text-center mt-5">  
      <button className="bg-gray-700  text-white py-2 px-4 rounded-xl font-semibold hover:bg-gray-600 transition">Explore more</button>  
    </div>  
  </div>  
</section>
    </div>
  );
}
