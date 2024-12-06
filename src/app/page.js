"use client";  
import { useState, useEffect } from "react";  
import Head from "next/head";  

const Carousel = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const slides = [  
    {  
      image: "https://www.electricland-tokyo.com/cdn/shop/files/2021-03-03_16_38_40.jpg?v=1617583520",  
      text: "New Arrivals"  
    },  
    {  
      image: "https://www.electricland-tokyo.com/cdn/shop/files/2021-03-03-17-46-18.jpg?v=1617811192",  
      text: "Designers"  
    },  
    {  
      image: "https://www.electricland-tokyo.com/cdn/shop/files/2021-03-03-17-46-16.jpg?v=1617811228",  
      text: "Accessories"  
    },  
  ];  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));  
    }, 5000);  
    return () => clearInterval(intervalId);  
  }, []);  

  const goToPrevious = () => {  
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));  
  };  

  const goToNext = () => {  
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));  
  };  

  return (  
    <div className="relative w-full h-full mt-16"> {/* Thêm margin-top cho ảnh */}  
      <div className="overflow-hidden w-full h-full relative">  
        <div  
          className="flex transition-all duration-1000 ease-in-out"  
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}  
        >  
          {slides.map((slide, index) => (  
            <div key={index} className="w-screen h-[600px] flex-shrink-0 relative">  
              <img  
                src={slide.image}  
                alt={`Slide ${index + 1}`}  
                className="w-full h-full object-cover"  
              />  
               {/* Centered Text Container */}  
              <div className="absolute inset-0 flex items-center justify-center">  
                <div className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">  
                  {slide.text}  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  

      <button  
        onClick={goToPrevious}  
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full shadow-lg transition duration-300"  
      >  
        <span className="material-icons">chevron_left</span>  
      </button>  
      <button  
        onClick={goToNext}  
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full shadow-lg transition duration-300"  
      >  
        <span className="material-icons">chevron_right</span>  
      </button>  

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">  
        {slides.map((_, index) => (  
          <button  
            key={index}  
            onClick={() => setCurrentIndex(index)}  
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-400"}`}  
          />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default function Home() {  
  return (  
    <div>  
      <Head>  
        <title>Trang Chủ với Carousel</title>  
        <meta name="description" content="Trang chủ của chúng tôi với carousel" />  
        <link rel="icon" href="/favicon.ico" />  
      </Head>  

      <main className="p-0">  
        <Carousel />  
        <div className="bg-black text-white p-8">
  <h2 className="text-2xl font-bold mb-6">WHAT'S TRENDING NOW</h2>
  <div className="flex mb-6">
    <button className="mx-2 px-4 py-2 bg-gray-700 rounded-md">Seasonal</button>
    <button className="mx-2 px-4 py-2 bg-gray-700 rounded-md">Marketplace</button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    <div className="p-4 rounded-lg">
      <img
        src="https://image-raw.reversible.com/raw_images/d38b53cd6acc58594e810190e0552ca6330add9ef075fe10afc03550d09669b8"
        alt="Max Mara"
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">Max Mara</h3>
      <p className="text-sm">AVORIAZ Oversize stretch cotton...</p>
      <span className="block text-lg mt-2">$218</span>
    </div>
    <div className="p-4 rounded-md">
      <img
        src="https://image-raw.reversible.com/raw_images/f42c4130d9480b70b730158d48b8b39af5864c8b75d83d50b0b48bafa8052f3b"
        alt="Max Mara"
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">Marc Jacobs</h3>
      <p className="text-sm">THE JACQUARD SMALL TOTE...</p>
      <span className="block text-lg mt-2">$207</span>
    </div>
    <div className="p-4 rounded-md">
      <img
        src="https://image-raw.reversible.com/raw_images/ed2a83111e6280cdbdaf32669b1f4dd8cb8bbfbd9cb31129133b6a785f3e3b83"
        alt="Max Mara"
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">Alexander Wang</h3>
      <p className="text-sm">BITE LOGO SHORT IN DEEP...</p>
      <span className="block text-lg mt-2">$177</span>
    </div>
    <div className="p-4 rounded-md">
      <img
        src="https://image-raw.reversible.com/raw_images/90a4519393009ccb8588d1d0a5c76e86c1a81a2c7a96d6eab306e7457be35f06"
        alt="Max Mara"
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">Totême</h3>
      <p className="text-sm">Straight tailored shorts black</p>
      <span className="block text-lg mt-2">$210</span>
    </div>
    <div className="p-4 rounded-md">
      <img
        src="https://image-raw.reversible.com/raw_images/bf5c2ddfe5a29fd43e506413a1563c16521ba59feffca7120d45b92c5fd7e4a0"
        alt="Max Mara"
        className="w-full h-[250px] object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold">FERRAGAMO</h3>
      <p className="text-sm">Front flap crossbody bag (M)</p>
      <span className="block text-lg mt-2">$1,085</span>
    </div>
  </div>
  <button className="mt-6 block mx-auto px-6 py-2 bg-gray-700 rounded-md">Explore more</button>
</div>
<section className="flex-grow flex flex-col md:flex-row items-center justify-center text-center gap-8 p-8 sm:p-10 border-b-2 border-gray-800">  
  <div className="pl-6 sm:pl-10 w-full  sm:w-1/2 text-center sm:text-left">  
    <h1 className="text-4xl sm:text-3xl text-center text-white font-bold mb-4">  
      WELCOME TO WEATHERED  
    </h1>  
    <p className="mb-10 text-white max-w-xl mx-auto text-sm sm:text-base">  
      Tại Weathered, chúng tôi tái định nghĩa phong cách thời trang vượt thời gian với bộ sưu tập kết hợp sự mạnh mẽ và thanh lịch hiện đại.  
      Thiết kế của chúng tôi tập trung vào sự tinh xảo và chất lượng cao, với các sản phẩm đa năng phù hợp cho mọi mùa trong năm.   
      Từ những chiếc áo khoác đặc trưng, áo len thoải mái, đến quần âu được may đo kỹ lưỡng và trang phục ngoài trời sang trọng, Weathered mang đến những sản phẩm bền bỉ với thời gian.  
      Khám phá phong cách tinh tế cùng Weathered—thương hiệu tôn vinh độ bền, sự chân thực và vẻ đẹp của sự giản đơn.  
    </p>  
  </div>  

  <div className="flex flex-col sm:flex-row justify-center gap-8 w-full sm:w-1/2">  
    {/* WOMENSWEAR */}  
    <div className="p-4 rounded-lg text-center w-full relative transition-transform transform hover:scale-105">  
      <img  
        src="/images/women.jpg"  
        alt="Womenswear"  
        className="rounded-lg mb-4 w-full h-auto object-cover shadow-lg"  
      />  
      <h2 className="text-xl sm:text-2xl font-bold absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">  
        SHOP WOMENSWEAR  
      </h2>  
    </div>  

    {/* MENSWEAR */}  
    <div className="p-4 rounded-lg text-center w-full relative transition-transform transform hover:scale-105">  
      <img  
        src="/images/men.jpg"  
        alt="Menswear"  
        className="rounded-lg mb-4 w-full h-auto object-cover shadow-lg"  
      />  
      <h2 className="text-xl sm:text-2xl font-bold absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">  
        SHOP MENSWEAR  
      </h2>  
    </div>  
  </div>  
</section>
<section class="bg-black text-white p-8">  
    <h2 class="text-3xl font-bold">FEATURED DESIGNERS</h2>  
    <p class="mt-4 max-w-2xl text-sm">From luxury powerhouses to emerging designers, experience the creativity and diversity of over 500 brands on Weathered.</p>  
    
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/jacquemus-width200" alt="Jacquemus" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>JACQUEMUS</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/valentino-width200" alt="Valentino" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Valentino</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/saint-laurent-width200" alt="Saint Laurent" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>SAINT LAURENT</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/miu-miu-width200" alt="Miu Miu" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Miu Miu</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/loewe-width200" alt="Loewe" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Loewe</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/dries-van-noten-width200" alt="Dries Van Noten" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Dries Van Noten</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/balenciaga-width200" alt="Balenciaga" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>BALENCIAGA</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/gucci-width200" alt="Gucci" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>GUCCI</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/lemaire-width200" alt="Lemaire" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Lemaire</p>  
        </div>  
        <div class="text-center flex flex-col items-center">  
            <img src="https://image-raw.reversible.com/logo/designer/zimmermann-width200" alt="Zimmermann" class="w-[100px] h-auto rounded-full mb-4" />  
            <p>Zimmermann</p>  
        </div>  
    </div>  
</section>



      </main>  
    </div>  
  );  
}
