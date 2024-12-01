import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-grey-600 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center text-center gap-5">
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
          <div className=" p-4 rounded-lg text-center w-[45%] relative">
            <img src="/images/women.jpg" alt="Womenswear" className="rounded-lg mb-4 w-full h-auto object-cover" />
            <h2 className="text-2xl mb-10 font-semibold absolute inset-0 flex items-center justify-center text-white">SHOP WOMENSWEAR</h2>
          </div>

          {/* MENSWEAR */}
          <div className=" p-4 rounded-lg text-center  w-[45%] relative">
            <img src="/images/men.jpg" alt="Menswear" className="rounded-lg mb-4 w-full h-auto object-cover" />
            <h2 className="text-2xl mb-10 font-semibold absolute inset-0 flex items-center justify-center text-white">SHOP MENSWEAR</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
