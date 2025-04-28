import Image from 'next/image';

const brands = [
  '/versace.svg',
  '/zara.svg',
  '/gucci.svg',
  '/prada.svg',
  '/calvin-klein.svg',
];

const FeaturedBrands = () => {
  return (
    <div className="bg-black py-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 md:justify-around">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            width={120}
            height={100}
            alt="brand"
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
