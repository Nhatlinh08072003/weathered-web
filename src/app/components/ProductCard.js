import Image from "next/image";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-72 h-72">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-800 text-center">{title}</h3>
      <p className="text-lg font-bold">{price}₫</p>
    </div>
  );
};

export default ProductCard;
