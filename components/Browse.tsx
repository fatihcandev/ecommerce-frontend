import Image from 'next/image';
import React from 'react';

const categories = [
  {
    name: 'Casual',
    image: '/casual.png',
  },
  {
    name: 'Formal',
    image: '/formal.png',
  },
  {
    name: 'Party',
    image: '/party.png',
  },
  {
    name: 'Gym',
    image: '/gym.png',
  },
];

const Browse = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col rounded-3xl bg-gray-100 p-8">
        <span className="mb-6 text-center text-5xl font-extrabold">
          BROWSE BY DRESS STYLE
        </span>
        <div className="grid grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-2 lg:grid-rows-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative h-[250px] w-full overflow-hidden rounded-2xl"
            >
              <span className="absolute top-4 left-4 z-10 text-3xl font-semibold">
                {category.name}
              </span>
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
