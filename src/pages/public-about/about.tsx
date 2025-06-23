import { useEffect, useState } from 'react';
import HomeFooter from '../public-home/home-content/footer';
import AboutContent1 from './about-content/content-1';
import AboutContent2 from './about-content/content-2';
import AboutContent3 from './about-content/content-3';

export default function About() {
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
      <AboutContent1 />
      <AboutContent2 />
      <AboutContent3 />
      <HomeFooter />

      {showButton && (
        <button
          onClick={scrollToTop}
          className={`bg-black/50 rounded-full fixed bottom-8 right-8 transition-opacity duration-500 ${
            showButton ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="font-bold text-white py-2 px-5 text-2xl">↑</h1>
        </button>
      )}
    </div>
  );
}
