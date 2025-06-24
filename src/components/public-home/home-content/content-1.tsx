import '../../../../styles/home.css';

type HomeContent1Props = {
  onScrollToContent2: () => void;
  onScrollToContent3: () => void;
  onScrollToContent4: () => void;
};

export default function HomeContent1({
  onScrollToContent2,
  onScrollToContent3,
  onScrollToContent4,
}: HomeContent1Props) {
  return (
    <>
      {/* แยกพื้นหลังออกมานอก component */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* Content ที่อยู่เหนือพื้นหลัง */}
      <div className="bg-transparent flex h-[100dvh] w-full p-10 z-10 justify-start items-center relative">
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold text-white text-9xl">ABCDEF</h1>
          <p className="text-white text-6xl">abcdef</p>
          <div className="flex space-x-5">
            <button
              onClick={onScrollToContent2}
              className="bg-gray-500 text-white text-xl p-2 hover:bg-gray-700"
            >
              service
            </button>
            <button
              onClick={onScrollToContent3}
              className="bg-gray-500 text-white text-xl p-2 hover:bg-gray-700"
            >
              latest news
            </button>
            <button
              onClick={onScrollToContent4}
              className="bg-gray-500 text-white text-xl p-2 hover:bg-gray-700"
            >
              .
            </button>
            <button className="bg-gray-500 text-white text-xl p-2 hover:bg-gray-700">
              see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
