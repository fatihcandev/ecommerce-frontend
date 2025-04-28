import Image from 'next/image';
import BrandName from './BrandName';
import { Button } from './ui/button';
import Subscribe from './Subscribe';

const socialLogos = [
  {
    src: '/x-logo.svg',
    alt: 'logo of x (formerly twitter)',
  },
  {
    src: '/facebook-logo.png',
    alt: 'logo of facebook',
  },
  {
    src: '/instagram-logo.svg',
    alt: 'logo of instagram',
  },
];

const companyLinks = ['About', 'Features', 'Works', 'Careers'];
const helpLinks = [
  'Customer support',
  'Delivery details',
  'Terms & conditions',
  'Privacy policy',
];
const faqLinks = ['Account', 'Manage deliveries', 'Orders', 'Payments'];

const Footer = () => {
  return (
    <div className="relative mt-50 flex flex-col bg-gray-100 pt-40 pb-10 md:mt-30 md:pt-30 lg:pt-24">
      <div className="absolute -top-40 right-4 left-4 md:-top-20">
        <Subscribe />
      </div>
      <div className="container mx-auto flex flex-col gap-4 px-4">
        <BrandName />
        <div className="flex items-center">
          {socialLogos.map((logo, index) => (
            <Button variant="ghost" size="icon" key={index}>
              <Image src={logo.src} alt={logo.alt} width={16} height={16} />
            </Button>
          ))}
        </div>
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
          }}
        >
          <div className="flex flex-col gap-2">
            <span className="font-semibold">COMPANY</span>
            {companyLinks.map((link) => (
              <span key={link} className="text-sm text-gray-500">
                {link}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">HELP</span>
            {helpLinks.map((link) => (
              <span key={link} className="text-sm text-gray-500">
                {link}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">FAQ</span>
            {faqLinks.map((link) => (
              <span key={link} className="text-sm text-gray-500">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
