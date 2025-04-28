import { MailIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const Subscribe = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 rounded-3xl bg-black px-4 py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10">
      <p className="text-center text-4xl font-extrabold text-white md:mr-auto md:max-w-[450px] md:text-left">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </p>
      <div className="flex w-full max-w-[300px] flex-col gap-2">
        <div className="relative flex items-center rounded-full bg-white py-2 pl-4">
          <MailIcon className="absolute top-1/2 size-4 -translate-y-1/2 text-gray-500" />
          <input
            className="w-full border-0 pl-8 placeholder:text-gray-400 focus:outline-0"
            placeholder="Enter your email address"
          />
        </div>
        <Button variant="secondary" className="rounded-full">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
