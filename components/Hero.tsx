import { Button } from '@/components/ui/button';
import Image from 'next/image';

const stats = [
  {
    header: '200+',
    description: 'International brands',
  },
  {
    header: '2,000+',
    description: 'High quality products',
  },
  {
    header: '30,000+',
    description: 'Happy customers',
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="container mx-auto flex max-w-[1000px] flex-col px-4 lg:flex-row">
        <div className="flex flex-col items-center gap-4 py-4 lg:items-start lg:py-16">
          <span className="text-center text-5xl font-[900] uppercase lg:max-w-[450px] lg:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </span>
          <span className="text-center text-sm text-gray-400 lg:max-w-[450px] lg:text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
          <Button>Shop Now</Button>
          <div className="mt-4 flex justify-center gap-4 max-lg:flex-wrap lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center pr-6 last-of-type:border-none md:mr-6 md:items-start md:border-r"
              >
                <span className="text-3xl font-bold">{stat.header}</span>
                <span className="text-sm text-gray-400">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden min-h-full w-full lg:flex">
          <Image
            src="/hero.svg"
            fill
            alt="A person with long dark hair wearing a black denim jacket and white hoodie stands next to another person with short light brown hair, also in a black denim jacket and white hoodie, against a solid black background. Both are looking slightly downward."
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
