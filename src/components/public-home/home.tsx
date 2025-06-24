'use client';
import { useEffect, useRef, useState } from 'react';
import HomeContent1 from './home-content/content-1';
import HomeContent2 from './home-content/content-2';
import HomeContent3 from './home-content/content-3';
import HomeContent4 from './home-content/content-4';
import HomeFooter from './home-content/footer';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const content2Ref = useRef<HTMLDivElement>(null);
  const content3Ref = useRef<HTMLDivElement>(null);
  const content4Ref = useRef<HTMLDivElement>(null);

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
    <div
      className="flex flex-col h-auto w-screen 
    items-center justify-start overflow-y-auto"
    >
      <HomeContent1
        onScrollToContent2={() =>
          content2Ref.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onScrollToContent3={() =>
          content3Ref.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onScrollToContent4={() =>
          content4Ref.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <div ref={content2Ref} className="h-auto w-full">
        <HomeContent2 />
      </div>
      <div ref={content3Ref} className="h-auto w-full">
        <HomeContent3 />
      </div>
      <div ref={content4Ref} className="h-auto w-full">
        <HomeContent4 />
      </div>
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
