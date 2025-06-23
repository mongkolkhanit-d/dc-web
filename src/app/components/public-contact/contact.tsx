'use client';
import { useEffect, useState } from 'react';
import HomeFooter from '../public-home/home-content/footer';
import ContactContent1 from './contact-content/content-1';

export default function Contact() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#dfdfdf] flex flex-col h-auto w-screen items-center justify-start overflow-y-auto">
      <ContactContent1 />

      <HomeFooter />
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`bg-black/50 hover:bg-black/70 cursor-pointer rounded-full fixed bottom-8 right-8 transition-all duration-500 shadow-lg ${
            showButton ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="font-bold text-white py-2 px-5 text-2xl">↑</h1>
        </button>
      )}
    </div>
  );
}
